import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.less', '../button.less', '../heading.less']
})
export class VoterComponent implements OnInit {
  private _voterName: string;
  @Input()  set name(data: string) {
    this._voterName = data;
  }
  get voterName() {
    return this._voterName;
  }
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onVoted: EventEmitter<boolean>;
  public voted: boolean;
  constructor() {
    this.onVoted = new EventEmitter<boolean>();
    this.voted = false;
  }
  vote(agreed: boolean) {
    this.onVoted.emit(agreed);
    this.voted = true;
  }

  ngOnInit() {
  }

}
