import { Component, ElementRef, QueryList, ViewChildren, 
         OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'rq-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: {
    '(window:scroll)': 'updateHeader($event)'
  }
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChildren('about,services,portfolio,pricing,contact') sections: QueryList<ElementRef>;
  
  offset:number = 10;
  sectionPositions:number[] = [];
  currentActive:number = 0;
  currentScrollPosition: number = 0;
  
  searchForm = { city: '' };

  cities = [
    { name: 'Paris', description: 'Yes, we built Paris', image: 'http://www.w3schools.com/bootstrap/paris.jpg'},
    { name: 'New York', description: 'We built New York', image: 'http://www.w3schools.com/bootstrap/newyork.jpg'},
    { name: 'San Francisco', description: 'Yes, San Fran is ours', image: 'http://www.w3schools.com/bootstrap/sanfran.jpg'}
  ];

  isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.updateOffsets();
  }

  updateHeader(evt) {
    this.updateOffsets();
    let active = 0;
    this.currentScrollPosition = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0) + this.offset;
    this.sectionPositions.forEach(
      offset => {
        if( this.currentScrollPosition > offset ) {
          active = this.sectionPositions.indexOf(offset) + 1;
        }
      }
    );
    this.currentActive = active;
  }

  updateOffsets() {
    this.sectionPositions = [];
    if(this.sections != undefined) {
      this.sections.forEach(
        section => { this.sectionPositions.push(section.nativeElement.offsetTop); }
      );
    }
  }

}
