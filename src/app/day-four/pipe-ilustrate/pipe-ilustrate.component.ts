import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-ilustrate',
  templateUrl: './pipe-ilustrate.component.html',
  styleUrls: ['./pipe-ilustrate.component.less']
})
export class PipeIlustrateComponent implements OnInit {
  today = new Date();
  toggle = true;
  price = '23.54';
  name = 'Ajit';
  power = '';
  factor = '';
  constructor() { }

  ngOnInit() {
  }
  get format() { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }
}
