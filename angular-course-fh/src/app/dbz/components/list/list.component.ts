import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class DbzListComponent {
  @Input()
  public characterList: Character[] = [{ id: '', name: 'Trunks', power: 10 }];

  @Output()
  public onDeleteCharacterEmitter: EventEmitter<string> = new EventEmitter();

  onDeleteIndex(index: string) {
    this.onDeleteCharacterEmitter.emit(index);
  }
}
