import {
  Component,
  OnInit,
  Input,
  HostListener,
  ElementRef,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver} from '@angular/core';

import {CNodeComponent} from "./c-node/c-node.component"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sandbox';

  constructor(
    private el: ElementRef,
    private resolver: ComponentFactoryResolver) { }

  @ViewChild('conditions', {read: ViewContainerRef, static: true}) conditions: ViewContainerRef;
  @Input() sendCreateNodeMessage: boolean;

  schemeData = [];

  componentRef: any;

  addNode(event: any) {console.log(event)
    const factory = this.resolver.resolveComponentFactory(CNodeComponent);
    this.componentRef = this.conditions.createComponent(factory);
  }

}
