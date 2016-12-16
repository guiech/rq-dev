import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, NavigationEnd } from '@angular/router';
import { PropertiesService } from 'app/services/properties.service';
import { Property } from 'app/models/property';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { SebmGoogleMapInfoWindow } from 'angular2-google-maps/core';

@Component({
  selector: 'rq-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  property:Property;
  propertiesRelated:Property[];

  showNumber:boolean = false;

  zoom:number = 14;

  mapIcon = './assets/images/system/map-marker.png';

  fal:boolean = false;
  tru:boolean = true;

  constructor(
    private route: ActivatedRoute,
    private propService: PropertiesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe((param:any) => this.property = this.propService.getPropertyById(+param.id));
    this.route.params
      .subscribe((param:any) => this.propertiesRelated = this.propService.getPropertiesRelated(+param.id));
    
  }

}
