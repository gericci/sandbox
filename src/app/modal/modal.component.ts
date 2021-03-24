import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private el: ElementRef, private router: Router) { }

  ngOnInit() {
    let allFocusables = this.el.nativeElement.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
    let theLast = allFocusables[allFocusables.length - 1];
    let theFirst = allFocusables[0];

    this.el.nativeElement.addEventListener('keydown', function(e) {
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
    });
  }

  @Input() isOpen: boolean = false;
  @Input() modalTitle: string;

  @Output() onShow: EventEmitter<any> = new EventEmitter();
  @Output() onHide: EventEmitter<any> = new EventEmitter();

  @ViewChild('dialogElement', {static: true}) dialogElement: ElementRef;
  @ViewChild('container', {static: true}) container: ElementRef;
  @ViewChild('focusable', {static: true}) focusable: ElementRef;

  dialogTitle = 'modalTitle' + this.randomID();
  dialogDescription = 'modalDesc' + this.randomID();

  onKey(event): void {
    if (event.key === 'Escape') {
      this.isOpen = false;
      this.onHide.emit(this.dialogElement);
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

  //Trap focus inside modal
  focusTrap(e): void {
    let allFocusables = this.el.nativeElement.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
    let theLast = allFocusables[allFocusables.length - 1];
    let theFirst = allFocusables[0];
    let currKey = document.activeElement;

    /*if(e.key === 'Tab' || e.keyCode === 9) {
      if ( e.shiftKey ) {
        if (currKey === theFirst) {
          theLast.focus();
          e.preventDefault();
        }
      } else {
        if (currKey === theLast) {
          theFirst.focus();
          e.preventDefault();
        }
      }
    }*/
  }


}
