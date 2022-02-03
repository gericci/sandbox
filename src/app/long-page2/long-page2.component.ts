import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastComponent } from '../toast/toast.component';

@Component({
  selector: 'app-long-page2',
  templateUrl: './long-page2.component.html',
  styleUrls: ['./long-page2.component.css']
})
export class LongPage2Component implements OnInit {

  constructor() { }

  ngOnInit() { }

  public quotes = [
    "",
    "If you're not having fun, you're doing something wrong.",
    "I was married by a judge; I should have asked for a jury.",
    "The problem with doing nothing is that you never know when it is finished.",
    "Outside of a dog, a book is man's best friend. Inside of a dog it's too dark to read.",
    "From the moment I picked up your book until I put it down, I was convulsed with laughter. Some day I intend reading it.",
    "Humor is reason gone mad.",
    "I never forget a face, but in your case I'll be glad to make an exception.",
    "The secret of life is honesty and fair dealing. If you can fake that, you've got it made.",
    "If a black cat crosses your path, it signifies that the animal is going somewhere.",
    "A child of five could understand this. Send someone to fetch a child of five.",
    "I intend to live forever, or die trying.",
    "Only one man in a thousand is a leader of men -- the other 999 follow women."
  ]

  public quote: string = this.quotes[this.randomNum()];

  updateQuote () {
    let gmQuote = document.getElementById('gm-quote');
    this.quote = this.quotes[this.randomNum()];
    //this.openToast();
  }

  randomNum() {
    const idRandom = Math.round(Math.random() * (12 - 1) + 1);
    return idRandom;
  }

  // Toast demo
  @ViewChild('toast', {static: true}) toast: ToastComponent;

  public openToast() {
    this.toast.toggle();
  }

  public doNothing(e) {
    e.preventDefault();

    if(document.getElementById('u-id')) {
      let inp = document.getElementById('u-id');
      inp.classList.add('error');
      inp.parentNode.insertAdjacentHTML('beforeend', '<span class=\"error\" id=\"error1\">User ID is mandatory</span>');

      //inp.setAttribute('aria-describedby', "error1")
      //inp.focus();
    }
  }

}
