import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rq-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items = [];

  constructor() { }

  ngOnInit() {
  }

}
