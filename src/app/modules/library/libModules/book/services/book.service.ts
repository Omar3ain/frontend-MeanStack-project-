import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  domin: string = "http://localhost:3000"
  booksUrl = `${this.domin}/books`;

  constructor(private http: HttpClient) { }
  handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }

  getBooks(query: string): Observable<any> {
    return this.http.get(this.booksUrl + query).pipe(catchError((this.handleError)));
  }
  getBooksCount(query: string): Observable<any> {
    return this.http.get(this.booksUrl + query).pipe(catchError((this.handleError)));
  }
  getBook(id: string): Observable<any> {
    return this.http.get(`${this.booksUrl}/${id}`).pipe(catchError((this.handleError)));
  }
}
