import { Component } from '@angular/core';
import AOS from 'aos';
import { CategoryService } from '../../../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categoryImagePath = 'assets/library/header-image.jpg';
  categories: any[] = [];
  constructor (private CategoryService: CategoryService, private router: Router ) {
    this.CategoryService.getTopFive().subscribe(categories => {
      this.categories = categories.categories;
    })
  }

  openCategory(id: string) {
    console.log(id)
    this.router.navigate(['categories',id]);
  }

  ngOnInit() {
    AOS.init();
  }
}
