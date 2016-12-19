import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FinderComponent }        from './finder.component';
import { SearchComponent }        from './pages/search/search.component';
import { PropertyComponent }      from './pages/property/property.component';

const finderRoutes: Routes = [
  { path: '',
    component: FinderComponent,
    children: [
      { path: 'city', component: SearchComponent },
      { path: 'city/:name', component: SearchComponent },
      { path: 'p', component: PropertyComponent },
      { path: 'p/:id', component: PropertyComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(finderRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FinderRoutingModule { }
