import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
      const pageTit = document.querySelector('h2');
      if (pageTit) {
        pageTit.setAttribute('tabindex', '-1');
        pageTit.focus();
      } else {
        console.log('no title');
      }
    });
  }


}
