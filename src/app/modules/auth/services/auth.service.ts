import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:3000/auth/login';
  constructor(private http: HttpClient) {}

  login(formData : FormData): Observable<any> {
    return this.http.post(this.loginUrl, formData);
  }

  isAuthenticated(): boolean {
    const jwtToken = this.getJwtToken();
    return jwtToken !== null;
  }

  getJwtToken(): string | null {
    const cookieVal = document.cookie.split('; ').find(row => row.startsWith('jwtToken='))?.split('=')[1];
    return cookieVal || null;
  }
}
