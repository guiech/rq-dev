import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Property } from 'app/models/Property';

@Component({
  selector: 'rq-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css'],
  providers: [NgbCarouselConfig],
  encapsulation: ViewEncapsulation.None
})
export class PropertyComponent implements OnInit {

  @Input() data:Property;

  constructor(config: NgbCarouselConfig) {
    config.interval = 0;
  }

  ngOnInit() {
  }

}
