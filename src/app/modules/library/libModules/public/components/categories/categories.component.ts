import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PublicService } from '../../services/public.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categoryImagePath = 'assets/library/header-image.jpg';
  populars: popular[] = [];
  authors: any[] = [];
  categories: any[] = [];
  constructor (private router: Router ,private _publicService : PublicService) {
    this._publicService.getPopulars().subscribe({
      next : (data) => {
        this.populars = data;
        this.authors = data.map((book :popular) => book.author).flat().filter((obj :any, index:any, self:any) =>index === self.findIndex((t : any) => (t._id === obj._id)));
        this.categories = data.map((book : popular) => book.category).flat().filter((obj :any, index:any, self:any) =>index === self.findIndex((t : any) => (t._id === obj._id)));
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
  }
}
interface popular {
  _id: string,
  avgRating: number,
  category : any[],
  coverPhoto: string,
  name:string;
  author : any[]
}