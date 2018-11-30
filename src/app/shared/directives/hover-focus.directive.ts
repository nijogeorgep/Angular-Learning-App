import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHoverFocus]'
})
export class HoverFocusDirective {
  @HostBinding('style.background-color') backgroundColor: string;

  @HostListener('mouseover') onMouseOver() {
    this.backgroundColor = 'lightblue';
  }

  @HostListener('mouseout') onMouseOut() {
    this.backgroundColor = 'transparent';
  }
  constructor() { }

}
