import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  errorMessage: string;
  pageTitle = 'Log In';
  userName = '';
  password = '';
  constructor(private authService: AuthService,
    private router: Router) { }

  login(loginForm: NgForm) {
    if (loginForm && loginForm.valid) {
      // tslint:disable-next-line:prefer-const
      let userName = loginForm.form.value.userName;
      // tslint:disable-next-line:prefer-const
      let password = loginForm.form.value.password;
      this.authService.login(userName, password);

      if (this.authService.redirectUrl) {
        this.router.navigateByUrl(this.authService.redirectUrl);
      } else {
        this.router.navigate(['/products']);
      }
    } else {
      this.errorMessage = 'Please enter a user name and password.';
    }
  }

}
