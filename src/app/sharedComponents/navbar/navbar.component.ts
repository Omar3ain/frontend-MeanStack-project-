import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  logoPath = 'assets/logo.png';
  siteName = 'Booky Tooky';
  navbarCollapsed = true;

  toggleNavbarCollapsing() {
    
  }
}
