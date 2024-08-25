import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-shared-page',
  templateUrl: './search-page.component.html',
  styles: ``,
})
export class SearchPageComponent {
  public searchInput = new FormControl('');
  public heroes: Hero[] = [];
  public selectedHero?: Hero;

  constructor(private readonly heroesService: HeroesService) {}

  public searchHeroes() {
    const value: string = this.searchInput.value || '';
    this.heroesService.getSuggestions(value).subscribe((heroes) => {
      this.heroes = heroes;
    });
  }

  public onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      this.selectedHero = undefined;
      return;
    }
    this.selectedHero = event.option.value;
    this.searchInput.setValue(event.option.value);
  }
}
