import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import IUserUpdate from '../Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:3000/profile/';
  btnClicked = new EventEmitter();

  constructor(private _http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }

  getUser(): Observable<IUserUpdate> {
    return this._http.get<IUserUpdate>(this.userUrl).pipe(catchError((this.handleError)));
  }

  editUser(formData: FormData): Observable<IUserUpdate> {
    return this._http.patch<IUserUpdate>(this.userUrl, formData).pipe(catchError((this.handleError)))
  }

}
