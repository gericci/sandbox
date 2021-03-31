import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {}

  @Input() isOpen: boolean = false;
  @Input() modalTitle: string;

  @Output() onShow: EventEmitter<any> = new EventEmitter();
  @Output() onHide: EventEmitter<any> = new EventEmitter();

  @ViewChild('dialogElement', {static: true}) dialogElement: ElementRef;
  @ViewChild('container', {static: true}) container: ElementRef;
  @ViewChild('focusable', {static: true}) focusable: ElementRef;

  theId = this.randomID();
  dialogTitle = 'modalTitle' + this.theId;
  dialogDescription = 'modalDesc' + this.theId;

  handleKeyEvents(e) {
    if (e.key === 'Escape') {
      this.isOpen = false;
      this.onHide.emit(this.dialogElement);
      return;
    }
    let allFocusables = this.el.nativeElement.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
    let theLast = allFocusables[allFocusables.length - 1];
    let theFirst = allFocusables[0];
    if(e.key === 'Tab' || e.keyCode === 9) {
      if ( e.shiftKey ) /* shift + tab */ {
        if (document.activeElement === theFirst) {
          theLast.focus();
          e.preventDefault();
        }
      } else /* tab */ {
        if (document.activeElement === theLast) {
          theFirst.focus();
          e.preventDefault();
        }
      }
    }
  }

  randomID(): number {
    const idRandom = Math.round(Math.random() * (20000 - 1) + 1);
    return idRandom;
  }

  ToggleOpen(): void {
    if (!this.isOpen) {
      this.isOpen = true;
      this.onShow.emit(this.dialogElement);

      const titleModalFocus = this.focusable.nativeElement;
      setTimeout(function() {
        titleModalFocus.focus();
      }, 500);
    } else if (this.isOpen) {
      this.isOpen = false;
      this.onHide.emit(this.dialogElement);
    }
  }

}
