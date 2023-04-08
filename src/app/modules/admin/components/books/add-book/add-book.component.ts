import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import  toastr_options  from "../../../../../utils/toastr.options";
import { ToastrService } from 'ngx-toastr';
import { AuthorService } from '../../../services/author.service';
import { BookService } from '../../../services/book.service';
import { CategoryService } from '../../../services/category.service';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit{

  bookForm: FormGroup;
  authors: any = [];
  categories : any = [];
  coverPhoto: File | undefined ;
  constructor(
    private formBuilder: FormBuilder,
    private  _authorService: AuthorService,
    private _categoryService : CategoryService,
    private _bookService : BookService,
    private toastr: ToastrService,) {

    this.bookForm = this.formBuilder.group({
      name: ['', []],
      description: ['', [Validators.required, Validators.minLength(6)]],
      coverPhoto : [''],
      authorId : ['',Validators.required],
      categoryId: ['',Validators.required],
    });
  }
  ngOnInit(): void {
    this.showAuthors()
    this.showCategories()
  }
  onSubmit() {
    if (!this.coverPhoto) {
      this.toastr.error( 'Missing Cover Photo','Could not add book',toastr_options);
      return;
    }
    this._bookService.addNewBook(this.bookForm.value,this.coverPhoto!).subscribe({
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
        let {error : {message}}  = error;
        if(!message) message = error.message;
        this.toastr.error(`MESSAGE : ${message}`,'Could not load authors data',toastr_options);
      },
    })
  }

  showCategories(){
    this._categoryService.getCategories().subscribe({
      next: (data) => {
        this.categories = data.categories;
      },
      error: (error) => {
        let {error : {message}}  = error;
        if(!message) message = error.message;
        this.toastr.error(`MESSAGE : ${message}`,'Could not load Categories data',toastr_options);
      },
    })
  }
}
