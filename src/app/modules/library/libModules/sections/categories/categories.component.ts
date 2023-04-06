import { Component } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categoryImagePath = 'assets/library/header-image.jpg';
  ngOnInit() {
    AOS.init();
  }
}
