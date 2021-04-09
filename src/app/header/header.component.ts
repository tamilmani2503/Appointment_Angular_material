import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   
  authorized:Boolean = false;
  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('authorized') === 'true') {
      this.authorized = true;
    }
  }

  onLogout() {
    this.authorized = false;
    localStorage.removeItem('authorized');
    localStorage.removeItem('token');
  }

}
