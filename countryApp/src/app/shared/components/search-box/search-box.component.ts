import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``,
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string = '';

  @Output()
  public emitValueSearch = new EventEmitter<string>();

  public handlerSearch(query: string) {
    this.emitValueSearch.emit(query);
  }
}
