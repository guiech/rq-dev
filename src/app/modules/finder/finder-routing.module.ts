import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FinderComponent }        from './finder.component';
import { SearchComponent }        from './search/search.component';

const finderRoutes: Routes = [
  { path: '',
    component: FinderComponent,
    children: [
      { path: 'city', component: SearchComponent },
      { path: 'city/:name', component: SearchComponent }
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
