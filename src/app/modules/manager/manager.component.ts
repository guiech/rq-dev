import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rq-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css',
            '../../../assets/css/manager/font-awesome.min.css',
            '../../../assets/css/manager/glyphicons-filetypes.css',
            '../../../assets/css/manager/glyphicons-social.css',
            '../../../assets/css/manager/glyphicons.css',
            '../../../assets/css/manager/simple-line-icons.css'],
  encapsulation: ViewEncapsulation.None
})
export class ManagerComponent implements OnInit {

  sidebarOpen:boolean = true;
  asideMenuOpen:boolean = false;
  mobileSidebarOpen:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  getClasses() {
    return {
      'mobile-open':this.mobileSidebarOpen,
      'sidebar-nav':this.sidebarOpen,
      'aside-menu-open':this.asideMenuOpen
    };
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  toggleAsideMenu() {
    this.asideMenuOpen = !this.asideMenuOpen;
  }

  toggleMobileSidebar() {
    this.mobileSidebarOpen = !this.mobileSidebarOpen;
  }

}
