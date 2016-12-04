import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rq-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

}
