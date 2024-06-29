import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent implements OnInit {
  public countriesList: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private readonly countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesList = this.countriesService.cacheStorage.byCapital.countries;
    this.initialValue = this.countriesService.cacheStorage.byCapital.term;
  }

  public searchByCapital(query: string) {
    this.isLoading = true;
    this.countriesService.searchCapital(query).subscribe((countries) => {
      this.countriesList = countries;
      this.isLoading = false;
    });
  }
}
