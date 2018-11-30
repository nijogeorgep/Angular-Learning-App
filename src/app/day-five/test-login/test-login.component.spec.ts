import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TestLoginComponent, User } from './test-login.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('TestLoginComponent', () => {
  let component: TestLoginComponent;
  let fixture: ComponentFixture<TestLoginComponent>;
  let submitEl: DebugElement;
  let loginEl: DebugElement;
  let passwordEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        TestLoginComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(TestLoginComponent);
    component = fixture.componentInstance;

    submitEl = fixture.debugElement.query(By.css('button'));
    loginEl = fixture.debugElement.query(By.css('input[type="email"]'));
    passwordEl = fixture.debugElement.query(By.css('input[type="password"]'));
  });

  it('setting enabled to false disabled the submit button', () => {
    component.enabled = false;
    fixture.detectChanges();
    expect(submitEl.nativeElement.disabled).toBeTruthy();
  });

  it('setting enabled to true enables the submit button', () => {
    component.enabled = true;
    fixture.detectChanges();
    expect(submitEl.nativeElement.disabled).toBeFalsy();
  });

  it(`Validating User's email details`, () => {
    let user: User;
    loginEl.nativeElement.value = "abc@ac.com";
    passwordEl.nativeElement.value = "123456";
    submitEl.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.userData.email).toBe("abc@ac.com");
  });

  it(`Validating User's password details`, () => {
    let user: User;
    loginEl.nativeElement.value = "abc@ac.com";
    passwordEl.nativeElement.value = "123456";
    submitEl.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.userData.password).toBe("123456");
  });
});
