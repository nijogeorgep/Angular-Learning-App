import { Component, OnInit } from '@angular/core';
import { DetailsShareCompProviderService } from '../details-share-comp-provider.service';

@Component({
  selector: 'app-sibling-one-component-provider',
  templateUrl: './sibling-one-component-provider.component.html',
  styleUrls: ['./sibling-one-component-provider.component.less', '../../day-two/button.less'],
  providers: [DetailsShareCompProviderService]
})
export class SiblingOneComponentProviderComponent implements OnInit {
  public studentName: string;
  constructor(
    private _detailsCompProviderService: DetailsShareCompProviderService
  ) { }

  ngOnInit() {
  }

  public saveDetail() {
    this._detailsCompProviderService.addStudentDetails(this.studentName);
    this.studentName = '';
  }

}
