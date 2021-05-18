import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective {

  constructor(private element: ElementRef) {
  }
  @Input()
  set appAutofocus(value: boolean) {
    const element = this.element.nativeElement;
    setTimeout(() => {
      element.focus();
    }, 0);
  }
}
