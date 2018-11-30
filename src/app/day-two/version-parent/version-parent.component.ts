import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-version-parent',
  templateUrl: 'version-parent.component.html',
  styleUrls: ['./version-parent.component.less', '../button.less', '../heading.less']
})
export class VersionParentComponent {
  public major: number;
  public minor: number;

  constructor() {
    this.major = 1;
    this.minor = 23;
  }
  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }
}
