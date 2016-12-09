import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rq-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  BASE_URL = "http://localhost:4200";
  isLogin = true;
  userName = "Guillermo";
  userImg = "";
  adminLink = "/admin";
  isCollapsed = true;
  userImage = "assets/images/avatar_03.png";

  constructor() { }

  ngOnInit() {
  }

}
