import { Component, OnInit, ViewChildren } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor(private router: Router) {
  }

  mainContentUrl = this.router.url + '#container';

  currentPage: boolean;

  ngOnInit(): void {}

}
