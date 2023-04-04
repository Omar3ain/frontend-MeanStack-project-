import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

interface Category {}

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  
  categories: any = [];
  categoriesUrl = 'http://localhost:3000/categories';
  constructor(private http: HttpClient) {}
  getCategories(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}