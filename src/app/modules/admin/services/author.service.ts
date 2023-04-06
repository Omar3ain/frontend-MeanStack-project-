import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  authors: any = [];
  authorsUrl = 'http://localhost:3000/authors';
  constructor(private http: HttpClient) {}
  
  getAuthors(): Observable<any> {
    return this.http.get(this.authorsUrl);
  }
}
