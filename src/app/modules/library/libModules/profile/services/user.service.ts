import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import IUserUpdate from '../Interfaces/user';
import currentDomain from 'src/app/utils/dominUrls';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private domain: string = currentDomain;
  private userUrl = `${this.domain}/profile/`;
  btnClicked = new EventEmitter();

  constructor(private _http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }

  getUser(): Observable<IUserUpdate> {
    return this._http.get<IUserUpdate>(this.userUrl).pipe(catchError((this.handleError)));
  }

  editUser(formData: FormData): Observable<IUserUpdate> {
    return this._http.patch<IUserUpdate>(this.userUrl, formData).pipe(catchError((this.handleError)));
  }

  getuserBooks(shelf: string, skip: number, limit: number) {
    return this._http.get(`${this.userUrl}books?shelve=${shelf}&skip=${skip}&limit=${limit}`).pipe(catchError((this.handleError)));
  }
}
