import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote-taker',
  templateUrl: './vote-taker.component.html',
  styleUrls: ['./vote-taker.component.less', '../button.less', '../heading.less']
})
export class VoteTakerComponent implements OnInit {

  public agreed: number;
  public disagreed: number;
  public voters: string[];
  constructor() {
    this.agreed = 0;
    this.disagreed = 0;
    this.voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto']
  }

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }

  ngOnInit() {
  }

}
