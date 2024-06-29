import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``,
})
export class ByCountryPageComponent implements OnInit {
  public isLoading = false;
  public initValue: string = '';
  public countriesList: Country[] = [];

  constructor(private readonly countriesService: CountriesService) {}

  ngOnInit(): void {
    this.initValue = this.countriesService.cacheStorage.byCountries.term;
    this.countriesList =
      this.countriesService.cacheStorage.byCountries.countries;
  }

  public searchByCountry(query: string) {
    this.isLoading = true;
    this.countriesService.searchCountry(query).subscribe((countries) => {
      this.countriesList = countries;
      this.isLoading = false;
    });
  }
}
