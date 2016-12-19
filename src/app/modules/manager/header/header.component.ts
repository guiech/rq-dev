import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rq-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() onToggleSidebar = new EventEmitter();
  @Output() onToggleAsideMenu = new EventEmitter();
  @Output() onToggleMobileSidebar = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleSidebar() {
    console.log('sidebar clicked');
    this.onToggleSidebar.emit();
  }

  toggleAsideMenu() {
    console.log('aside clicked');
    this.onToggleAsideMenu.emit();
  }

  toggleMobileSidebar() {
    console.log('mobile clicked');
    this.onToggleMobileSidebar.emit();
  }

}
