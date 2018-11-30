import { Component, OnInit } from '@angular/core';

import { HEROES } from '../hero';
@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styleUrls: ['./hero-parent.component.less', '../button.less', '../heading.less']
})
export class HeroParentComponent implements OnInit {
  public heroes: any;
  public master: string;
  constructor() {
    this.heroes = HEROES;
    this.master = 'Master';
  }

  ngOnInit() {
  }

}
