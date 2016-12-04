import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rq-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  type = 'success';
  show = true;

  constructor() { }

  ngOnInit() {
  }

  public closeAlert() {
    this.show = false;
  }

}
