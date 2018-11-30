import { Component, OnInit } from '@angular/core';
import { EmployeeDetailModel } from '../models/employeeData.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.less']
})
export class TemplateDrivenFormComponent implements OnInit {
  public employee: EmployeeDetailModel = new EmployeeDetailModel();
  constructor() { }

  ngOnInit() {
  }

  save(employeeForm: NgForm) {
    console.log(employeeForm.form);
    console.log('Saved: ' + JSON.stringify(employeeForm.value));
  }

  resetFormData(employeeForm: NgForm) {
    employeeForm.reset();
  }

}
