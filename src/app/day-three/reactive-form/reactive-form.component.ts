import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import { EmployeeDetailModel } from '../models/employeeData.model';

class EmailMatcher {

  public static Validation(c: AbstractControl): { [key: string]: boolean } | null {
    // tslint:disable-next-line:prefer-const
    let emailControl = c.get('email');
    // tslint:disable-next-line:prefer-const
    let confirmControl = c.get('confirmEmail');

    if (emailControl.pristine || confirmControl.pristine) {
      return null;
    }

    if (emailControl.value === confirmControl.value) {
      return null;
    }
    return { 'match': true };
  }

}

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.less']
})
export class ReactiveFormComponent implements OnInit {
  public employeeForm: FormGroup;
  public employee: EmployeeDetailModel = new EmployeeDetailModel();
  emailMessage: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      emailGroup: this.fb.group({
        email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+')]],
        confirmEmail: ['', Validators.required],
      }, { validator: EmailMatcher.Validation })
    });
  }
  save(): void {
    console.log('Saved: ' + JSON.stringify(this.employeeForm.value));
  }
  resetFormData() {
    this.employeeForm.reset();
  }

}
