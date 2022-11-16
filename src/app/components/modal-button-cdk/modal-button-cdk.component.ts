import { Component, OnInit, Input } from '@angular/core';
import { ModalCdkComponent } from '../modal-cdk/modal-cdk.component';
//import { A11yModule } from "@angular/cdk/a11y";

/*
imports: [  
  A11yModule  
]
*/


@Component({
  selector: 'app-modal-button-cdk',
  templateUrl: './modal-button-cdk.component.html',
  styleUrls: ['./modal-button-cdk.component.css']
})
export class ModalButtonCdkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() modal: ModalCdkComponent;
  @Input() disabled: boolean;
  @Input() btclass: string;

  public openModalCdk(e): void {
    this.modal.ToggleOpen();
  }

}

