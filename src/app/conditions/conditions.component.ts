import { Component, Input } from '@angular/core';

export interface Node {
  key: string;
  property: string;
  value: string;
  children: Node[];
  type: string;
}

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent {

  @Input() editMode: boolean = false;

  btTexts = new Array();
  propValue: string = "";

  propOptions = [];
  currentEditionNode: Node;
  optionsEmpty: boolean = true;

  constructor() { }

  add2PhraseHandler(btText: string): void {
    this.btTexts.push(btText);
  }

  deleteTagHandler(ind: number): void {
    this.btTexts = this.btTexts.filter((item, btindex) => ind != btindex);
  }

  /* Switch modes */
  onItemChange(value: string) {
    if(value === "graph") {
      this.editMode = true;
    } else {
      this.editMode = false;
    }
  }

  /* Graph view ------------------------------------------------ */

  rootNode: Node = {
    key: 'node',
    property: 'location',
    value: 'london',
    children: [],
    type: 'start'
  };

  get node() {
    return this.rootNode;
  }

  selectPropValues(propvalue, editingNode) {console.log(this.optionsEmpty)
    this.optionsEmpty = false;
    this.propValue = propvalue;
    this.propOptions = [propvalue + ' Value 1', propvalue + ' Value 2', propvalue + ' Value 3'];
    this.currentEditionNode = editingNode;
  }

  setOption(opt: string) {
    this.currentEditionNode.value = opt;
  }
}
