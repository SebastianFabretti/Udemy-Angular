import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { DbzListComponent } from './components/dbz-list/dbz-list.component';
import { AddDbzCharacterComponent } from './components/add-dbz-character/add-dbz-character.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MainPageComponent, DbzListComponent, AddDbzCharacterComponent],
  exports: [MainPageComponent],
  imports: [CommonModule, FormsModule]
})
export class DbzModule { }
