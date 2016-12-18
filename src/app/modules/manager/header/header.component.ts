import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rq-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() onToggleSidebar = new EventEmitter();
  @Output() onToggleAsideMenu = new EventEmitter<boolean>();
  @Output() onToggleMobileSidebar = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.onToggleSidebar.emit();
  }

  toggleAsideMenu() {
    this.onToggleAsideMenu.emit();
  }

  toggleMobileSidebar() {
    this.onToggleMobileSidebar.emit();
  }

}
