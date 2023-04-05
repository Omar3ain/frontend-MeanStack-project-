import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: any = [];
  booksUrl = 'http://localhost:3000/books/';
  constructor(private http: HttpClient) { }
  getBooks(): Observable<any> {
    return this.http.get(this.booksUrl);
  }
}
