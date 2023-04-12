import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  categories: any;
  constructor(private categoryService: CategoryService) {
    this.categoryService.getCategories().subscribe(categories =>{
      this.categories = categories.categories;
      console.log(categories)
    });
  }
}
