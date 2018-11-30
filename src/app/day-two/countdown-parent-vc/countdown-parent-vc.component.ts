import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-countdown-parent-vc',
  templateUrl: './countdown-parent-vc.component.html',
  styleUrls: ['./countdown-parent-vc.component.less', '../button.less', '../heading.less']
})
export class CountdownParentVcComponent implements AfterViewInit {

  @ViewChild(CountdownTimerComponent)
  private _timerComponent: CountdownTimerComponent;

  seconds() { return 0; }

  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => this.seconds = () => this._timerComponent.seconds, 0);
  }

  start() { this._timerComponent.start(); }
  stop() { this._timerComponent.stop(); }

}
