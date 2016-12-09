import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinderComponent } from './finder.component';
import { SearchComponent } from './search/search.component';
import { FinderRoutingModule } from './finder-routing.module';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PropertyComponent } from './search/property/property.component';

@NgModule({
  imports: [
    // angular modules
    CommonModule,
    // routing module
    FinderRoutingModule,
    // thirthy party modules
    NgbModule.forRoot()
  ],
  declarations: [FinderComponent, SearchComponent, HeaderComponent, PropertyComponent]
})
export class FinderModule { }
