import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  authors: any = [];
  authorUrl = 'http://localhost:3000/authors'
  constructor(private http: HttpClient) { }
  getAuthors() {
    return this.http.get(this.authorUrl)
  }
}
