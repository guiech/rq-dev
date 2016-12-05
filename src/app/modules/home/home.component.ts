import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'rq-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: {
    '(window:scroll)': 'updateHeader($event)'
  }
})
export class HomeComponent implements OnInit {

  @ViewChild('about') about: ElementRef;

  isScrolled = false;
  currPos: Number = 0;
  startPos: Number = 0;
  changePos: Number = 100;

  searchForm = { city: '' };

  portfolio = [
    { name: 'Paris', description: 'Yes, we built Paris', image: 'http://www.w3schools.com/bootstrap/paris.jpg'},
    { name: 'New York', description: 'We built New York', image: 'http://www.w3schools.com/bootstrap/newyork.jpg'},
    { name: 'San Francisco', description: 'Yes, San Fran is ours', image: 'http://www.w3schools.com/bootstrap/sanfran.jpg'}
  ];

  isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.changePos = this.about.nativeElement.offsetTop;
  }

  updateHeader(evt) {
    
    this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
    if(this.currPos >= this.changePos ) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

}
