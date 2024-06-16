import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent {
  public countriesList: Country[] = [];

  constructor(private readonly countriesService: CountriesService) {}

  public searchByCapital(query: string) {
    this.countriesService.searchCapital(query).subscribe((countries) => {
      this.countriesList = countries;
    });
  }
}
