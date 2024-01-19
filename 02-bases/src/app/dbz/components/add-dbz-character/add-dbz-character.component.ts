import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'add-dbz-character',
  templateUrl: './add-dbz-character.component.html',
  styleUrls: ['./add-dbz-character.component.css']
})
export class AddDbzCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter():void{
    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character)

    this.character = {name: '', power: 0};
  }
}
