import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  constructor(private titleService: Title) {
      titleService.setTitle("Dashboard: Angular Accessibility Sandbox");
  }

  ngOnInit() { }

  @Input() titleLevel:string;

}
