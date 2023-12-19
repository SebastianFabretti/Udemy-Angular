import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>
  <button (click)="increaseBy(10)">+10</button>
  <button (click)="increaseBy(-10)">-10</button>
  <button (click)="resetCounter()">Reset</button>
  `
})

export class CounterComponent{
  public counter: number = 10;

  increaseBy(value: number):void{
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
