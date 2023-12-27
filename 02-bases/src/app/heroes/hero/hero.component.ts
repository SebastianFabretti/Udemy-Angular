import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'Superman';
  public age: number = 35;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`
  }

  changeName(): void {
    this.name = "Batman"
  }

  changeAge(): void {
    this.age = 30
  }

  resetForm():void {
    this.name = 'Superman';
    this.age = 35;
  }
}
