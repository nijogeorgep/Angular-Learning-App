import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-name-child',
  templateUrl: './name-child.component.html',
  styleUrls: ['./name-child.component.less', '../button.less', '../heading.less']
})
export class NameChildComponent {

  // tslint:disable-next-line:no-inferrable-types
  private _name: string = '';

  @Input()
  set name(data: string) {
    this._name = (data && data.trim()) || '<no name set>';
  }

  get name(): string { return this._name; }

}
