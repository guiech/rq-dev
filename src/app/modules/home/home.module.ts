import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home.component';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header.component';
import { HeaderItemComponent } from './header/header-item/header-item.component'

@NgModule({
  imports: [
    // angular modules
    CommonModule,
    FormsModule,
    // routing
    HomeRoutingModule,
    // thirthy party modules
    NgbModule.forRoot()
  ],
  declarations: [HomeComponent, HeaderComponent, HeaderItemComponent]
})
export class HomeModule { }
