import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``,
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  @Input()
  public placeholder: string = '';
  @Input()
  public initialValue?: string = '';

  @Output()
  public emitValueSearch = new EventEmitter<string>();
  @Output()
  public emitDebounceValue = new EventEmitter<string>();

  private debounce = new Subject<string>();
  private debounceSubscription?: Subscription;

  ngOnInit(): void {
    this.debounceSubscription = this.debounce
      .pipe(debounceTime(500))
      .subscribe((value) => {
        this.emitDebounceValue.emit(value);
      });
  }

  ngOnDestroy(): void {
    this.debounceSubscription?.unsubscribe();
  }

  public handlerSearch(query: string) {
    this.emitValueSearch.emit(query);
  }

  public onKeyPress(searchTerm: string) {
    this.debounce.next(searchTerm);
  }
}
