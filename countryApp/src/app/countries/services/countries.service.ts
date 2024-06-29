import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';

import { Country } from '../interfaces/country.interface';
import { CacheStorage } from '../interfaces/cache-storage.interface';
import { Region } from '../interfaces/region.type';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  public cacheStorage: CacheStorage = {
    byCapital: {
      term: '',
      countries: [],
    },
    byCountries: {
      term: '',
      countries: [],
    },
    byRegion: {
      term: '',
      countries: [],
    },
  };

  constructor(private readonly http: HttpClient) {
    this.loadFromLocalStorage();
  }

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(
      catchError(() => of([]))
      // delay(2000)
    );
  }

  public searchCapital(query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${query}`;
    return this.getCountriesRequest(url).pipe(
      tap(
        (countries) =>
          (this.cacheStorage.byCapital = { term: query, countries })
      ),
      tap(() => this.saveToLocalStorage())
    );
  }

  public searchCountry(query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${query}`;
    return this.getCountriesRequest(url).pipe(
      tap(
        (countries) =>
          (this.cacheStorage.byCountries = { term: query, countries })
      ),
      tap(() => this.saveToLocalStorage())
    );
  }

  public searchRegion(query: Region): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${query}`;
    return this.getCountriesRequest(url).pipe(
      tap(
        (countries) => (this.cacheStorage.byRegion = { term: query, countries })
      ),
      tap(() => this.saveToLocalStorage())
    );
  }

  public searchByAlfaCode(code: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Country[]>(url).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError((error) => {
        console.log(error);
        return of(null);
      })
    );
  }

  private saveToLocalStorage() {
    localStorage.setItem('cacheStorage', JSON.stringify(this.cacheStorage));
  }

  private loadFromLocalStorage() {
    const cached = localStorage.getItem('cacheStorage');

    if (!cached) return;

    this.cacheStorage = JSON.parse(cached);
  }
}
