import {
  Component,
  } from '@angular/core';


export interface Node {
  key: string;

  property: string;
  value: string;

  children: Node[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sandbox';
  rootNode: Node = {
    key: '1',
    property: 'location',
    value: 'london',
    children: []
  };

  get node() {
    console.log(this.rootNode);
    return this.rootNode;
  }

}
