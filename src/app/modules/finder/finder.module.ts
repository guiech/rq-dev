import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinderComponent } from './finder.component';
import { SearchComponent } from './search/search.component';
import { FinderRoutingModule } from './finder-routing.module';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PropertyItemComponent } from './search/property-item/property-item.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { PropertyComponent } from './property/property.component';
import { ImageGalleryComponent } from 'app/components/image-gallery/image-gallery.component';
import { FooterComponent } from './footer/footer.component';

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
  declarations: [FinderComponent, SearchComponent, HeaderComponent, PropertyItemComponent, PropertyComponent, ImageGalleryComponent, FooterComponent]
})
export class FinderModule { }
