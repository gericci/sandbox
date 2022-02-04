import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'h',
  template: `<h2><ng-content></ng-content></h2>`
})
export class HComponent {
  @Input() titleLevel: string;

  constructor(private el: ElementRef) {}

  ngAfterContentInit() {
    const replacement = document.createElement('h' + this.titleLevel);
    const replaced = this.el.nativeElement.firstChild;

    //copy children
    while (replaced.firstChild) {
      replacement.appendChild(replaced.firstChild);
    }

    //replace element
    this.el.nativeElement.replaceChild(replacement, replaced);
  }
}
