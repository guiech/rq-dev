import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PropertiesService } from 'app/services/properties.service';
import { Property } from 'app/models/property';

@Component({
  selector: 'rq-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  property:Property;

  showNumber:boolean = false;

  constructor(
    private route: ActivatedRoute,
    private propService: PropertiesService
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe((param:any) => this.property = this.propService.getPropertyById(+param.id));
    console.log("v1");
  }

}
