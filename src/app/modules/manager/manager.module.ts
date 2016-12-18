import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ManagerComponent } from './manager.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ManagerRoutingModule } from './manager-routing.module';

@NgModule({
  imports: [
    CommonModule,
    // routing module
    ManagerRoutingModule,
    // thirthy party modules
    NgbModule.forRoot()
  ],
  declarations: [ManagerComponent, FooterComponent, HeaderComponent, SidebarComponent, DashboardComponent]
})
export class ManagerModule { }
