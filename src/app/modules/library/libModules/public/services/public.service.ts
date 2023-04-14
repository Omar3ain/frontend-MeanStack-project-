import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicService {
  private domain: string = 'http://localhost:3000';

  constructor( private _http : HttpClient ) { }

  handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }
  getPopulars() : Observable<any> {
    return this._http.get(`${this.domain}/books/get/populars`).pipe(catchError((this.handleError)));
  }
}
