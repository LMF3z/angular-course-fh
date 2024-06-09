import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private readonly gifsService: GifsService) {}

  get gifsList() {
    return this.gifsService.gifsList;
  }
}
