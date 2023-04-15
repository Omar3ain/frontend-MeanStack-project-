import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  categories: any;
  constructor(private categoryService: CategoryService , private router : Router) {
    this.categoryService.getCategories().subscribe(categories =>{
      this.categories = categories.categories;
    });
  }
  getCategory(name : string){
    const queryParams = {
      category: name,
    };
    this.router.navigate(['/books'] ,{queryParams})
  }
}
