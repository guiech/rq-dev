import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinderComponent } from './finder.component';
import { SearchComponent } from './search/search.component';
import { FinderRoutingModule } from './finder-routing.module';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PropertyComponent } from './search/property/property.component';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  imports: [
    // angular modules
    CommonModule,
    // routing module
    FinderRoutingModule,
    // thirthy party modules
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyABZMkbRqSTpzD2c1DSYRO0i670tP7ODkk'
    })
  ],
  declarations: [FinderComponent, SearchComponent, HeaderComponent, PropertyComponent]
})
export class FinderModule { }
