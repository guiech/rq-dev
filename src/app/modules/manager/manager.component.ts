import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rq-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css',
            './font-awesome.min.css',
            './glyphicons-filetypes.css',
            './glyphicons-social.css',
            './glyphicons.css',
            './simple-line-icons.css'],
  encapsulation: ViewEncapsulation.None
})
export class ManagerComponent implements OnInit {

  sidebarOpen:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

}
