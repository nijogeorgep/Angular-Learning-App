import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-parent',
  templateUrl: './name-parent.component.html',
  styleUrls: ['./name-parent.component.less', '../button.less', '../heading.less']
})
export class NameParentComponent implements OnInit {
  public names: string[];
  constructor() {
    // Displays 'Mr. IQ', '<no name set>', 'Bombasto'
    this.names = ['Mr. IQ', '   ', '  Bombasto  '];
  }

  ngOnInit() {
  }

}
