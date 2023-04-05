import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
interface Category {

}

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  
  categories: any = [];
  categoriesUrl = 'http://localhost:3000/categories';
  categoriesAdminUrl = 'http://localhost:3000/admin/categories';
  constructor(private http: HttpClient) {}
  getCategories(): Observable<any> {
    return this.http.get(this.categoriesUrl);
  }
  postCategory(myCategory: any): Observable<any> {
    return this.http.post(this.categoriesUrl, myCategory);
  }
  deleteCategory(categoryId: any): Observable<any> {
    return this.http.delete(`${this.categoriesAdminUrl}/${categoryId}`);
  }
}