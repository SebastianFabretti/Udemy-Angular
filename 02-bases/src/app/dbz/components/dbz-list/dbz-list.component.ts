import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './dbz-list.component.html',
  styleUrls: ['./dbz-list.component.css']
})

export class DbzListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 3000
  }]
}
