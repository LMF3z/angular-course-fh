import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @ViewChild('textTagInput')
  tagInput!: ElementRef<HTMLInputElement>;

  constructor(private readonly gifsService: GifsService) {}

  searchTag() {
    this.gifsService.searchTag(this.tagInput.nativeElement.value);
    this.tagInput.nativeElement.value = '';
  }
}
