import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c-node',
  templateUrl: './c-node.component.html',
  styleUrls: ['./c-node.component.css']
})
export class CNodeComponent implements OnInit {

  constructor() { }

  @Output() sendCreateNodeMessage = new EventEmitter<boolean>();
  createNodeNow: boolean;

  ngOnInit() { }

  addNode(event: boolean) {
    this.createNodeNow = true;
    this.sendCreateNodeMessage.emit(this.createNodeNow);
  }

}
