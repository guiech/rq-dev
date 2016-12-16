import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'rq-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})
export class FinderComponent implements OnInit {

  showFooter:boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if(evt.url.indexOf('/city/') === 0) {
        this.showFooter = false;
      } else {
        this.showFooter = true;
      }
    });
  }

}
