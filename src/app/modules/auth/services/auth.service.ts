import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import currentDomain from 'src/app/utils/dominUrls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private domain: string = currentDomain;
  private loginUrl = `${this.domain}/auth/login`;
  private registerUrl = `${this.domain}/auth/register`;
  constructor(private http: HttpClient, private cookieService: CookieService) { }

  handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }

  login(formData: FormData): Observable<any> {
    return this.http.post(this.loginUrl, formData).pipe(catchError((this.handleError)));
  }

  register(formData: FormData): Observable<any> {
    return this.http.post(this.registerUrl, formData).pipe(catchError((this.handleError)));
  }

  logOut(){
    this.cookieService.delete('jwtToken','/');
    this.cookieService.delete('isAdmin','/');
  }

  setCookie(token : string, isAdmin: any) {
    this.cookieService.set('jwtToken', token, 7, '/');
    this.cookieService.set('isAdmin', isAdmin, 7, '/');
  }

  isAuthenticated(): boolean {
    const jwtToken = this.getJwtToken();
    return jwtToken !== '' && jwtToken !== null ;
  }

  isAdmin(): any {
    const isAdmin = this.getAdmin();
    if(isAdmin && isAdmin !== ''){
      return JSON.parse(isAdmin)
    }
  }

  getJwtToken(): any {
    try {
      return this.cookieService.get('jwtToken');
    } catch (err) {
      return null;
    }
  }

  getAdmin(): any {
    try{
      return this.cookieService.get('isAdmin');
    }catch(err){
      return null;
    }
  }
}
