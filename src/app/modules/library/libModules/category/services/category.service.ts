import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import currentDomain from 'src/app/utils/dominUrls';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  domin : string = currentDomain;
  categoriesUrl = `${this.domin}/categories`;

  constructor(private http: HttpClient) { }
  handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }

  getCategories(): Observable<any> {
    return this.http.get(this.categoriesUrl).pipe(catchError((this.handleError)));
  }
  getCategory(id : string) : Observable<any>  {
    return this.http.get(`${this.categoriesUrl}/${id}`).pipe(catchError((this.handleError)));
  }

  getTopFive(): Observable<any> {
    return this.http.get(`${this.categoriesUrl}?skip=0&limit=5`)
  }
}
