import {Directive, ElementRef, Host, OnDestroy} from '@angular/core';
import {filter} from 'rxjs/operators';
import {NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Directive({
  selector: '[appFocusOnPageChange]'
})
export class FocusOnPageChangeDirective implements OnDestroy {
  private subscription: Subscription;

  constructor(private router: Router, @Host() private element: ElementRef) {
    this.subscription = this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e: NavigationEnd) => {
      if (e.url.includes('#')) {
        return;
      }
      const elt = element.nativeElement;
      if (element) {
        elt.setAttribute('tabindex', '-1');
        elt.focus();
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
