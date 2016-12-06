import { Component, OnInit, ViewChildren, ElementRef, AfterViewInit, QueryList } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'rq-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: {
    '(window:scroll)': 'updateHeader($event)'
  }
})
export class HomeComponent implements OnInit {

  @ViewChildren('section') sections: QueryList<ElementRef>;
  offsets:number[] = [];
  currentActive = 0;
  currPos: Number = 0;
  
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
    this.sections.forEach(
      section => { this.offsets.push(section.nativeElement.offsetTop); }
    );
  }

  updateHeader(evt) {
    this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
    this.offsets.forEach(
      offset => {
        if( this.currPos > offset ) {
          this.currentActive = this.offsets.indexOf(offset) + 1;
        }
      }
    );
  }

}
