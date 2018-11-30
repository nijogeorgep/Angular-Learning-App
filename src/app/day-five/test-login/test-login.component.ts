import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

export class User {
  constructor(
    public email: string = '', public password: string = ''
  ){}
}

@Component({
  selector: 'app-test-login',
  templateUrl: './test-login.component.html',
  styleUrls: ['./test-login.component.less']
})
export class TestLoginComponent implements OnInit, OnDestroy {
  public enabled: boolean;
  public userData = new User();
  public loginObservable$: Observable<number>;
  public loginTimerData: number;
  public loginSubscription: Subscription;
  constructor() { 
    this.enabled = true;
  }

  ngOnInit() {
    this.loginObservable$ = Observable.create(observer => {
      let index = 0;
      setInterval(data => {
        observer.next(index = index+2);
      }, 2000);
    });
  }

  public login(email, password) {
    if(email && password) {
      console.log('Login Successfull');
      this.userData = {email, password};
      console.log("Provided Data is", this.userData);
    }
  }

  public startObservableInterval() {
    this.loginSubscription = this.loginObservable$.subscribe({next: this._getNewData});
  }

  private _getNewData = (data) => {
    this.loginTimerData = data;
  };

  public stopObservableInterval() {
    this._cancelLoginSubscription();
  }

  private _cancelLoginSubscription() {
    if(this.loginSubscription && this.loginSubscription instanceof Subscription) {
      this.loginSubscription.unsubscribe();
    }
  }

  ngOnDestroy() {
    this._cancelLoginSubscription();
  }

}
