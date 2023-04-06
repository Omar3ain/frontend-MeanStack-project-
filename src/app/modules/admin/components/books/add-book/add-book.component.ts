import { Component, OnInit} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(
    private router: Router, 
    private formBuilder: FormBuilder, 
    private  _authorService: AuthorService, 
    private _categoryService : CategoryService,
    private _bookService : BookService,
    private toastr: ToastrService,) {

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
    console.log(this.bookForm);
    
  }
  onSubmit() {
    console.log(this.bookForm.value);
  }

  uploadImage(target: any){
    console.log(target.files[0]);
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
