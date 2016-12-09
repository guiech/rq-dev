import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'rq-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css'],
  providers: [NgbCarouselConfig],
  encapsulation: ViewEncapsulation.None
})
export class PropertyComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 0;
  }

  ngOnInit() {
  }

}
