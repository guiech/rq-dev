import 'rxjs/add/operator/switchMap';
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PropertiesService } from 'app/services/properties.service';
import { Property } from 'app/models/property';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { SebmGoogleMapInfoWindow } from 'angular2-google-maps/core';

@Component({
  selector: 'rq-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  host: {
    '(window:resize)': 'updateMapSize($event)'
  }
})
export class SearchComponent implements OnInit {

  searchResult: any;
  properties: Property[];

  bfalse:boolean = false;
  btrue:boolean = true;

  isFilterCollapsed: boolean = true;

  page: number = 1;
  indexStart: number = 0;

  lat: number;
  lng: number;
  zoom: number = 14;
  mapHeight: string = '600px';
  headerHeight: number = 50;

  itemsPerPage = 10;

  mapIcon = './assets/images/system/map-marker.png';

  @ViewChildren(SebmGoogleMapInfoWindow) markersWindows:QueryList<SebmGoogleMapInfoWindow>; 

  constructor(
    private route: ActivatedRoute,
    private propService: PropertiesService
  ) { }

  ngOnInit() {
    /*
    I can't make this work
    url: https://angular.io/docs/ts/latest/tutorial/toh-pt5.html
    this.route.params
    .switchMap((params: Params) => this.heroService.getHero(+params['id']))
    .subscribe(hero => this.hero = hero);
    */
    this.route.params
      .subscribe((param:any) => this.searchResult = this.propService.getPropertiesByCity(param.name));

    this.lat = this.searchResult.city.lat;
    this.lng = this.searchResult.city.lng;

    this.properties = this.searchResult.data;
    
    this.mapHeight = (window.innerHeight - this.headerHeight) + 'px';
  }

  updateMapSize(event) {
    let height = +event.target.innerHeight - this.headerHeight;
    this.mapHeight = height + 'px';
  }

  closeMarkerWindows() {
    this.markersWindows.forEach((window:SebmGoogleMapInfoWindow) => window.close());
  }

  showPagination() {
    return this.properties.length > this.itemsPerPage;
  }

  changePage(page) {
    this.page = page;
    this.indexStart = (this.page - 1) * this.itemsPerPage;
  }

}
