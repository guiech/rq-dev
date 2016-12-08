import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinderComponent } from './finder.component';
import { SearchComponent } from './search/search.component';
import { FinderRoutingModule } from './finder-routing.module';

@NgModule({
  imports: [
    // angular modules
    CommonModule,
    // routing module
    FinderRoutingModule
  ],
  declarations: [FinderComponent, SearchComponent]
})
export class FinderModule { }
