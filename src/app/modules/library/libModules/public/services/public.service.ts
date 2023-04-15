import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import currentDomain from 'src/app/utils/dominUrls';

@Injectable({
  providedIn: 'root'
})
export class PublicService {
  private domain: string = currentDomain;

  constructor( private _http : HttpClient ) { }

  handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }
  getPopulars() : Observable<any> {
    return this._http.get(`${this.domain}/books/get/populars`).pipe(catchError((this.handleError)));
  }
}
