import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``,
})
export class CountryPageComponent implements OnInit {
  country?: Country;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly countriesService: CountriesService
  ) {}

  ngOnInit() {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.countriesService.searchByAlfaCode(id)))
      .subscribe((country) => {
        if (!country) {
          return this.router.navigateByUrl('');
        }
        this.country = country;
        return;
      });

    // this.activatedRoute.params.subscribe(({ id }) => {
    //   this.countriesService.searchByAlfaCode(id).subscribe((countries) => {
    //     console.log('countries --->', countries);
    //   });
    // });
  }
}
