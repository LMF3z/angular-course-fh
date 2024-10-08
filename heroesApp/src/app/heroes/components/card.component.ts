import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  @Input()
  public hero!: Hero;

  constructor() {}

  ngOnInit() {
    if (!this.hero) throw Error('Hero Prop Is Required');
  }
}
