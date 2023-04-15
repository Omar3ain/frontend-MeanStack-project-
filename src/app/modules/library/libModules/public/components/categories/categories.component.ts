import { Component } from '@angular/core';
import AOS from 'aos';
import { CategoryService } from '../../../category/services/category.service';
import { Router } from '@angular/router';
import { PublicService } from '../../services/public.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categoryImagePath = 'assets/library/header-image.jpg';
  populars: any[] = [];
  authors: any[] = [];
  categories: any[] = [];
  constructor (private router: Router ,private _publicService : PublicService) {
    this._publicService.getPopulars().subscribe({
      next : (data) => {
        this.populars = data;
        this.authors = data.map((book :any) => book.author).flat();
        this.categories = data.map((book : any) => book.category).flat();
      }
    })
  }
  getCategory(name : string){
    const queryParams = {
      category: name,
    };
    this.router.navigate(['/books'] ,{queryParams})
  }
  ngOnInit() {
    AOS.init();
  }
}
