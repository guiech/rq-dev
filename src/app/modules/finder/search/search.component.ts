import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PropertiesService } from 'app/services/properties.service';
import { Property } from 'app/models/property';

@Component({
  selector: 'rq-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  host: {
    '(window:resize)': 'updateMapSize($event)'
  }
})
export class SearchComponent implements OnInit {

  city: Property;

  isFilterCollapsed: boolean = true;

  page: number = 1;

  constructor(
    private route: ActivatedRoute,
    private propService: PropertiesService
  ) { }

  lat: number = 51.678418;
  lng: number = 7.809007;
  mapHeight: string = '600px';
  headerHeight: number = 50;

  ngOnInit() {
    /*
    I can't make this work
    url: https://angular.io/docs/ts/latest/tutorial/toh-pt5.html
    this.route.params
    .switchMap((params: Params) => this.heroService.getHero(+params['id']))
    .subscribe(hero => this.hero = hero);
    */
    this.route.params
      .subscribe((param:any) => this.city = this.propService.getPropertiesByCity(param.name));
    
    this.mapHeight = (window.innerHeight - this.headerHeight) + 'px';
  }

  updateMapSize(event) {
    let height = +event.target.innerHeight - this.headerHeight;
    this.mapHeight = height + 'px';
  }



}
