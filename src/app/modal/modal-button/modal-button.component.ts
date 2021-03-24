import { Component, OnInit, Input } from '@angular/core';
import { ModalComponent } from '../modal.component';

@Component({
  selector: 'app-modal-button',
  templateUrl: './modal-button.component.html',
  styleUrls: ['./modal-button.component.css']
})
export class ModalButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  @Input() modal: ModalComponent;
  @Input() disabled: boolean;
  @Input() btclass: string;

  public openModal(e): void {
    this.modal.ToggleOpen();
  }

}
