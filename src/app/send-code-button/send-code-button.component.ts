import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-send-code-button',
  templateUrl: './send-code-button.component.html',
  styleUrls: ['./send-code-button.component.css']
})
export class SendCodeButtonComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {}

  @Input() btLabel: string;
  @Input() firstTime: boolean = false;
  @Input() inputId: string;

  sendCode() {
    let theSVG = this.el.nativeElement.querySelector('svg');
    theSVG.classList.add('animate');

    setTimeout(() => {
      theSVG.classList.remove('animate');
      this.firstTime = true;

      // If dash in id it won't work!!!
      /*if (this.inputId != "") {
        const theInput = (document.getElementById(this.inputId)) as HTMLInputElement;
        if (theInput) {
          theInput.classList.add('active');
          setTimeout(() => {
            theInput.focus();
          }, 1000);
        }
      }*/
    }, 3000);
  }

}
