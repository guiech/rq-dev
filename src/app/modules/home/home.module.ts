import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home.component';

import { HomeRoutingModule } from './home-routing.module'

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
  declarations: [HomeComponent]
})
export class HomeModule { }
