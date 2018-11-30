import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star-indicate',
  templateUrl: './star-indicate.component.html',
  styleUrls: ['./star-indicate.component.less']
})
export class StarIndicateComponent implements OnInit, OnChanges {
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> =
    new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(): void {
    // Convert x out of 5 starts
    // to y out of 86px width
    this.starWidth = this.rating * 86 / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }

}
