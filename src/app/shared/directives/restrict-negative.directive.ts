import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';


@Directive({
  selector: '[appRestrictNegative]',
  host: {
    '(keydown)' : 'keyDownHandler($event)',
    '[class.error-field]' : '_errorField' 
  }
})
export class RestrictNegativeDirective {
  constructor(private el: ElementRef) { }
  _errorField:boolean;
  //@HostBinding('class.error-field') private _errorField:boolean;

  // @HostListener('keydown', ['$event']) onkeydown(event) {
  //   if (!((event.keyCode >= 47 && event.keyCode <=57) || event.keyCode === 8)) {
  //     this._errorField = true;
  //     event.preventDefault();
  //   }else {
  //     this._errorField = false;
  //   }
  // }

  keyDownHandler(event) {
    if (!((event.keyCode >= 47 && event.keyCode <=57) || event.keyCode === 8)) {
      this._errorField = true;
      event.preventDefault();
    }else {
      this._errorField = false;
    }
  }


}
