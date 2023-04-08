import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  domin : string = "http://localhost:3000"
  authorsUrl = `${this.domin}/authors`;
  
  constructor(private http: HttpClient) { }
  handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }

  getAuthors(): Observable<any> {
    return this.http.get(this.authorsUrl).pipe(catchError((this.handleError)));
  }
  getAuthor(id : string) : Observable<any>  {
    return this.http.get(`${this.authorsUrl}/${id}`).pipe(catchError((this.handleError)));
  }
}
