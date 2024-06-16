import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``,
})
export class ByCountryPageComponent {
  public countriesList: Country[] = [];

  constructor(private readonly countriesService: CountriesService) {}

  public searchByCountry(query: string) {
    this.countriesService.searchCountry(query).subscribe((countries) => {
      this.countriesList = countries;
    });
  }
}
