import { Component, OnInit } from '@angular/core';
import { DetailsShareCompProviderService } from '../details-share-comp-provider.service';

@Component({
  selector: 'app-sibling-two-component-provider',
  templateUrl: './sibling-two-component-provider.component.html',
  styleUrls: ['./sibling-two-component-provider.component.less', '../../day-two/button.less']
})
export class SiblingTwoComponentProviderComponent implements OnInit {
  public studentsDetails: string[];
  constructor(
    private _detailsCompProviderService: DetailsShareCompProviderService
  ) { }

  ngOnInit() {
    this.studentsDetails = [...this._detailsCompProviderService.getStudentDetails()];
  }

  public refreshList() {
    this.studentsDetails = [...this._detailsCompProviderService.getStudentDetails()];
  }

}
