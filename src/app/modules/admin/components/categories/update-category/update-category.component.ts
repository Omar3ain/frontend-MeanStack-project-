import { Component, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import  toastr_options  from "../../../../../utils/toastr.options";
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../../../services/category.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent {
  categoryForm: FormGroup;
  categoryId: string = '';
  categoryCover: File | undefined;

  constructor(
    private formBuilder: FormBuilder, 
    private _categoryService : CategoryService,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: { categroyId: string }) {

    this.categoryForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      categoryCover : [''],
    });
  }
  ngOnInit(): void {
    this.categoryId = this.data.categroyId;
    this._categoryService.getCategroy(this.categoryId ).subscribe({
      next: (data) => {
        this.categoryForm.patchValue({
          name: data.category.name,
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
    this._categoryService.updateCategroy(this.categoryForm.value,this.categoryId,this.categoryCover!).subscribe({
      next : () =>{
        this._categoryService.buttonClicked.emit();
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
  this.categoryCover = target.files[0];
}
}
