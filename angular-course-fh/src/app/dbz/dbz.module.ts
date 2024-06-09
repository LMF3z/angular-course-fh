import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page-component';
import { DbzListComponent } from './components/list/list.component';
import { AddDbzCharacterComponent } from './components/dbzAppCharacter/dbz-add-character.component';

@NgModule({
  declarations: [MainPageComponent, DbzListComponent, AddDbzCharacterComponent],
  exports: [MainPageComponent],
  imports: [CommonModule, FormsModule],
})
export class DbzModule {}
