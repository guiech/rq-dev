import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerComponent } from './manager.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ManagerRoutingModule } from './manager-routing.module';

@NgModule({
  imports: [
    CommonModule,
    // routing module
    ManagerRoutingModule
  ],
  declarations: [ManagerComponent, FooterComponent, HeaderComponent, AsideComponent, DashboardComponent]
})
export class ManagerModule { }
