import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  domin : string = "http://localhost:3000"

  constructor(private http: HttpClient) {}


  buttonClicked =new EventEmitter();
  
  getAuthors(): Observable<any> {
    return this.http.get(`${this.domin}/authors`).pipe(catchError((this.handleError)));
  }
  handleError(error: HttpErrorResponse ) {
    return throwError(() => error);
  }

  addNewAuthor(formValue :any, photo: File) : Observable<any> {
    const formData: FormData = new FormData();

    formData.append('photo', photo);
    formData.append('firstName', formValue['firstName']);
    formData.append('lastName', formValue['lastName']); 
    formData.append('dob', formValue['dob']); 

    return this.http.post(`${this.domin}/admin/author`, formData).pipe(catchError((this.handleError)));
  }

  deleteAuthor(id : string) : Observable<any> {
    return this.http.delete(`${this.domin}/admin/author/${id}`).pipe(catchError((this.handleError)));
  }
  getAuthorById(id : string) : Observable<any>  {
    return this.http.get(`${this.domin}/authors/${id}`).pipe(catchError((this.handleError)));
  }
  updateAuthor(formValue :any,id: string,  photo: File ) : Observable<any> {
    const formData: FormData = new FormData();

    if( photo) formData.append('photo', photo);

    formData.append('firstName', formValue['firstName']);
    formData.append('lastName', formValue['lastName']); 
    formData.append('dob', formValue['dob']); 

    return this.http.patch(`${this.domin}/admin/author/${id}`,formData).pipe(catchError((this.handleError)));
  }
}
