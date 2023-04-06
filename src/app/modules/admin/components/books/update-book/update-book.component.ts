import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import  toastr_options  from "../../../../../utils/toastr.options";
import { ToastrService } from 'ngx-toastr';
import { AuthorService } from '../../../services/author.service';
import { BookService } from '../../../services/book.service';
import { CategoryService } from '../../../services/category.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit{
  bookForm: FormGroup;
  authors: any = [];
  categories : any = [];
  bookId: string = '';
  coverPhoto: File | undefined ;
  constructor(
    private formBuilder: FormBuilder, 
    private  _authorService: AuthorService, 
    private _categoryService : CategoryService,
    private _bookService : BookService,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: { bookId: string }) {

    this.bookForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(6)]],
      coverPhoto : [''],
      authorId : ['',Validators.required],
      categoryId: ['',Validators.required],
    });
  }
  ngOnInit(): void {
    this.showAuthors()
    this.showCategories()
    this.bookId = this.data.bookId;
    this._bookService.getBook(this.bookId).subscribe({
      next: (data) => {
        this.bookForm.patchValue({
          name: data.name,
          description:  data.description,
          authorId: data.authorId,
          categoryId: data.categoryId,
        });
      },
      error: (error) => {
        let {error : {message}}  = error;
        if(!message) message = error.message;
        this.toastr.error(`MESSAGE : ${error.message}`,'Could not get book data',toastr_options);
      }
    })
   
  }
  onUpdate() {
    this._bookService.updateBook(this.bookForm.value,this.bookId,this.coverPhoto!).subscribe({
      next : () =>{
        this._bookService.buttonClicked.emit();
        this.toastr.success(`Data Inserted successfully`,'Insert status',toastr_options);
      },
      error : (error) => {
        let {error : {message}}  = error;
        if(!message) message = error.message;
        this.toastr.error(`MESSAGE : ${message}`,'Could not add book data',toastr_options);
      }
    })
    
  }

  uploadImage(target: any){
    this.coverPhoto = target.files[0];
  }
  showAuthors(){
    this._authorService.getAuthors().subscribe({
      next: (data) => {
        this.authors = data;
      },
      error: (error) => {
        this.toastr.error(`MESSAGE : ${error.message}`,'Could not load books data',toastr_options);
      },
    })
  }

  showCategories(){
    this._categoryService.getCategories().subscribe({
      next: (data) => {
        this.categories = data.categories;
      },
      error: (error) => {
        this.toastr.error(`MESSAGE : ${error.message}`,'Could not load books data',toastr_options);
      },
    })
  }

}
