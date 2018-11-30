import { Component, OnInit } from '@angular/core';
import { DetailsShareService } from '../details-share.service';

@Component({
  selector: 'app-sibling-one',
  templateUrl: './sibling-one.component.html',
  styleUrls: ['./sibling-one.component.less', '../../day-two/button.less']
})
export class SiblingOneComponent implements OnInit {
  public studentName: string;
  constructor(
    private _detailsShareService: DetailsShareService
  ) { }

  ngOnInit() {
  }

  public saveDetail() {
    this._detailsShareService.addStudentDetails(this.studentName);
    this.studentName = '';
  }

}
