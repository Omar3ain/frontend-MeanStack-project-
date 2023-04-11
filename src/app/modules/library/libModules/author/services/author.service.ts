import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { author } from '../components/list-authors/list-authors.component';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  currentPage = 1;
  authorsPerPage = 6;
  authors: author[] = [];
  authorUrl = 'http://localhost:3000/authors';
  bookUrl = 'http://localhost:3000/books'

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<author[]> {
    return this.http.get<author[]>(this.authorUrl).pipe(
      map((authors: author[]) => {
        this.authors = authors;
        return authors;
      })
    );
  }
  handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }
  getAuthorsById(id: string) {
    return this.http.get(`${this.authorUrl}/authors/${id}`).pipe(catchError((this.handleError)));

  }

  getAuthorsForPage(): author[] {
    const startIndex = (this.currentPage - 1) * this.authorsPerPage;
    const endIndex = startIndex + this.authorsPerPage;
    return this.authors.slice(startIndex, endIndex);
  }


  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
    }
  }

  totalPages(): number {
    return Math.ceil(this.authors.length / this.authorsPerPage);
  }



}
