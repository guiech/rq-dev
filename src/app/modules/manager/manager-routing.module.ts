import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManagerComponent }        from './manager.component';

import { DashboardComponent }   from './pages/dashboard/dashboard.component'

const routes: Routes = [
  { path: 'manager',
    component: ManagerComponent,
    children: [
        { path: '', pathMatch: 'full', redirectTo: 'dashboard'},
        { path: 'dashboard', component: DashboardComponent },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ManagerRoutingModule { }
