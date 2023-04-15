import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import  toastr_options  from "../../../../../utils/toastr.options";
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  categoryForm: FormGroup;
  categoryCover: File | undefined;

  constructor(
    private formBuilder: FormBuilder, 
    private _categoryService : CategoryService,
    private toastr: ToastrService,) {

    this.categoryForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      categoryCover : [''],
    });
  }
  ngOnInit(): void {
  }
  onSubmit() {
    this._categoryService.addNewCategroy(this.categoryForm.value,this.categoryCover!).subscribe({
      next : () =>{
        this._categoryService.buttonClicked.emit();
        this.toastr.success(`Data Inserted successfully`,'Insert status',toastr_options);
      },
      error : (error : any) => {
        let {error : {message}}  = error;
        if(!message) message = error.message;
        this.toastr.error(`MESSAGE : ${message}`,'Could not add book data',toastr_options);
      }
    })
  }

  uploadImage(target: any){
    this.categoryCover = target.files[0];
  }

}
