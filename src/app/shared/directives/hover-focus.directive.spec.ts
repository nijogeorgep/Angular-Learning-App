import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HoverFocusDirective } from './hover-focus.directive';
import { TestDirectiveComponent } from '../../day-five/test-directive/test-directive.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HoverFocusDirective', () => {
  let component: TestDirectiveComponent;
  let fixture: ComponentFixture<TestDirectiveComponent>;
  let inputEl: DebugElement;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations: [TestDirectiveComponent, HoverFocusDirective]
    });
    fixture = TestBed.createComponent(TestDirectiveComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));

  });

  it('Tests Hovering over input', () => {
    inputEl.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.backgroundColor).toBe('lightblue');
  });

  it('Tests Moving Out from input', () => {
    inputEl.triggerEventHandler('mouseout', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.backgroundColor).toBe('transparent');
  });
});
