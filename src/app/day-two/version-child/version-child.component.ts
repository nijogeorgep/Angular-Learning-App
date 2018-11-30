import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-version-child',
  templateUrl: 'version-child.component.html',
  styleUrls: ['../heading.less']
})
export class VersionChildComponent implements OnChanges {
  @Input() major: number;
  @Input() minor: number;
  changeLog: string[] = [];

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    // tslint:disable-next-line:prefer-const
    let log: string[] = [];
    // tslint:disable-next-line:forin disable-next-line:prefer-const
    for (let propName in changes) {
      // tslint:disable-next-line:prefer-const
      let changedProp = changes[propName];
      // tslint:disable-next-line:prefer-const
      let to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        // tslint:disable-next-line:prefer-const
        let from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
  }
}
