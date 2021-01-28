import {Component, Output, EventEmitter, Input} from '@angular/core';
import {Node} from '../app.component';
@Component({
  selector: 'app-c-node',
  templateUrl: './c-node.component.html',
  styleUrls: ['./c-node.component.css']
})
export class CNodeComponent {

  @Input() node: Node;
  @Input() deletable: boolean;

  @Output() deleteNodeHandler = new EventEmitter<string>();
  editable = false;

  addNode(node: Node) {
    const newKey = node.key + '-' + (node.children.length + 1);
    node.children.push({
      key: newKey,
      property: '',
      value: '',
      children: []
    });
  }

  deleteNode(node: Node) {
    this.deleteNodeHandler.emit(node.key);
  }

  deleteChild(key: string) {
    this.node.children = this.node.children.filter((c) => c.key !== key);
  }
}
