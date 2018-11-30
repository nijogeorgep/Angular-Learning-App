import { Component, OnInit } from '@angular/core';
import { DetailsShareService } from '../details-share.service';

@Component({
  selector: 'app-sibling-two',
  templateUrl: './sibling-two.component.html',
  styleUrls: ['./sibling-two.component.less', '../../day-two/button.less']
})
export class SiblingTwoComponent implements OnInit {
  public studentsDetails: string[];
  constructor(
    private _detailsService: DetailsShareService
  ) { }

  ngOnInit() {
    this.studentsDetails = [...this._detailsService.getStudentDetails()];
  }

  public refreshList() {
    this.studentsDetails = [...this._detailsService.getStudentDetails()];
  }

}
