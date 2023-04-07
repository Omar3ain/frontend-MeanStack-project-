import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:3000/auth/login';
  private registerUrl = 'http://localhost:3000/auth/register';
  constructor(private http: HttpClient, private cookieService: CookieService) { }

  login(formData: FormData): Observable<any> {
    return this.http.post(this.loginUrl, formData);
  }

  register(formData: FormData): Observable<any> {
    return this.http.post(this.registerUrl, formData);
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
    return jwtToken !== null;
  }

  isAdmin(): any {
    const isAdmin = this.getAdmin();
    try {
      return JSON.parse(isAdmin)
    } catch (error) {
      console.log(error);
    }
  }

  getJwtToken(): any {
    try{
      return this.cookieService.get('jwtToken');
    }catch(err){
      console.log(err);
    }
  }

  getAdmin(): any {
    try{
      return this.cookieService.get('isAdmin');
    }catch(err){
      console.log(err);
    }
  }
}
