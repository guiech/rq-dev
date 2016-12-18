import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rq-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() onToggleSidebar = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.onToggleSidebar.emit();
  }

}
