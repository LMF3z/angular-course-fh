import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent {
  public countriesList: Country[] = [];

  constructor(private readonly countriesService: CountriesService) {}

  public searchByRegion(query: string) {
    this.countriesService.searchRegion(query).subscribe((countries) => {
      this.countriesList = countries;
    });
  }
}
