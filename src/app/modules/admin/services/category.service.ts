import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  domin : string = "https://tsbookvalley.onrender.com"
  categories: any = [];

  buttonClicked =new EventEmitter();

  constructor(private http: HttpClient) {}
  handleError(error: HttpErrorResponse ) {
    return throwError(() => error);
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.domin}/admin/categories`).pipe(catchError((this.handleError)));
  }
  addNewCategroy(formValue :any, categoryCover: File) : Observable<any> {
    const formData: FormData = new FormData();

    formData.append('categoryCover', categoryCover);
    formData.append('name', formValue['name']);


    return this.http.post(`${this.domin}/admin/categories`, formData).pipe(catchError((this.handleError)));
  }

  deleteCategroy(id : string) : Observable<any> {
    return this.http.delete(`${this.domin}/admin/categories/${id}`).pipe(catchError((this.handleError)));
  }
  getCategroy(id : string) : Observable<any>  {
    return this.http.get(`${this.domin}/admin/categories/${id}`).pipe(catchError((this.handleError)));
  }
  updateCategroy(formValue :any,id: string, categoryCover: File ) : Observable<any> {
    const formData: FormData = new FormData();

    if(categoryCover)  formData.append('categoryCover', categoryCover);
    formData.append('name', formValue['name']);

    return this.http.patch(`${this.domin}/admin/categories/${id}`,formData).pipe(catchError((this.handleError)));
  }
}
