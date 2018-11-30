import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.less']
})
export class CountdownTimerComponent implements OnInit {

  public intervalId: number;
  public message: string;
  public seconds: number;
  constructor() {
    this.intervalId = 0;
    this.message = '';
    this.seconds = 11;
  }
  clearTimer() { clearInterval(this.intervalId); }

  ngOnInit() {
    this.start();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.clearTimer();
  }

  start() {
    this._countDown();
  }
  stop()  {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }

  private _countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Blast off!';
      } else {
        if (this.seconds < 0) { this.seconds = 10; } // reset
        this.message = `T-${this.seconds} seconds and counting`;
      }
    }, 1000);
  }
}
