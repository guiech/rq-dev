import { NgModule }                     from '@angular/core';
import { CommonModule }                 from '@angular/common';
import { NgbModule }                    from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule }                from 'angular2-google-maps/core';

import { FinderComponent }              from './finder.component';

import { HeaderComponent }              from './header/header.component';
import { FooterComponent }              from './footer/footer.component';

import { PropertyComponent }            from './pages/property/property.component';
import { SearchComponent }              from './pages/search/search.component';

import { PropertyItemComponent }        from './components/property-item/property-item.component';
import { ImageGalleryComponent }        from 'app/components/image-gallery/image-gallery.component';

import { FinderRoutingModule }          from './finder-routing.module';

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
  declarations: [
    FinderComponent,
    SearchComponent,
    HeaderComponent,
    PropertyItemComponent,
    PropertyComponent,
    ImageGalleryComponent,
    FooterComponent
  ]
})
export class FinderModule { }
