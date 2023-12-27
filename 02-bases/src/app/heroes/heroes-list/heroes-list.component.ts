import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})

export class HeroesListComponent {
  public heroNames: string[] = ['Superman', 'Batman',
  'Wonder Woman', "Aquaman", "Flash", "Green Lantern"]
  public deletedHero?: string;

  removeLastHero():void {
    this.deletedHero = this.heroNames.pop();
  }
}
