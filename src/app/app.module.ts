import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeModule } from './modules/home/home.module';
import { FinderModule } from './modules/finder/finder.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { PropertiesService } from './services/properties.service'


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    // angular modules
    BrowserModule,
    FormsModule,
    HttpModule,
    // renquila modules
    HomeModule,
    FinderModule,
    AppRoutingModule
  ],
  providers: [PropertiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
