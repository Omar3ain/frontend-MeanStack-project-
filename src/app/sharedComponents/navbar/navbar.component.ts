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

  navbarToggler(){
    document.getElementById('navbarNavDropdown')?.classList.toggle('show');
  }

  dropDownToggler(){
    document.getElementById('dropdown-list')?.classList.toggle('show');
    document.getElementById('dropdown-menu')?.classList.toggle('show');
  }
}
