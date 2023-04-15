import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  dominDev : string = "http://localhost:3000"
  domin : string = "https://tsbookvalley.onrender.com"
  booksUrl = `${this.dominDev}/books/`;
  buttonClicked =new EventEmitter();

  constructor(private http: HttpClient) { }
  handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }

  getBooks(): Observable<any> {
    return this.http.get(this.booksUrl).pipe(catchError((this.handleError)));
  }
  addNewBook(formValue :any, coverPhoto: File) : Observable<any> {
    const formData: FormData = new FormData();

    formData.append('coverPhoto', coverPhoto);
    formData.append('name', formValue['name']);
    formData.append('authorId', formValue['authorId']);
    formData.append('description', formValue['description']);
    formData.append('categoryId', formValue['categoryId']);

    return this.http.post(`${this.domin}/admin/book`, formData).pipe(catchError((this.handleError)));
  }

  deleteBook(id : string) : Observable<any> {
    return this.http.delete(`${this.domin}/admin/book/${id}`).pipe(catchError((this.handleError)));
  }
  getBook(id : string) : Observable<any>  {
    return this.http.get(`${this.domin}/admin/book/${id}`).pipe(catchError((this.handleError)));
  }
  updateBook(formValue :any, id: string, coverPhoto: File ) : Observable<any> {
    const formData: FormData = new FormData();

    if(coverPhoto)  formData.append('coverPhoto', coverPhoto);

    formData.append('name', formValue['name']);
    formData.append('authorId', formValue['authorId']);
    formData.append('description', formValue['description']);
    formData.append('categoryId', formValue['categoryId']);

    return this.http.patch(`${this.domin}/admin/book/${id}`,formData).pipe(catchError((this.handleError)));
  }
}
