import { Component, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import  toastr_options  from "../../../../../utils/toastr.options";
import { ToastrService } from 'ngx-toastr';
import { AuthorService } from '../../../services/author.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent {
  authorForm : FormGroup;
  authorId: string = '';
  photo: File | undefined;

  constructor(
    private formBuilder: FormBuilder, 
    private _authorService : AuthorService,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: { authorId: string }) {

    
      this.authorForm = this.formBuilder.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        description:['', [Validators.required]],
        dob: ['', [Validators.required]],
        photo : [''],
      });
    }
  ngOnInit(): void {
    this.authorId = this.data.authorId;
    this._authorService.getAuthorById(this.authorId).subscribe({
      next: (data) => {
        this.authorForm.patchValue({
          firstName: data.firstName,
          lastName: data.lastName,
          description : data.description,
          dob: data.dob,
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
    this._authorService.updateAuthor(this.authorForm.value,this.authorId,this.photo!).subscribe({
      next : () =>{
        this._authorService.buttonClicked.emit();
        this.toastr.success(`Data Inserted successfully`,'Insert status',toastr_options);
      },
      error : (error) => {
        let {error : {message}}  = error;
        if(!message) message = error.message;
        this.toastr.error(`MESSAGE : ${message}`,'Could not update author',toastr_options);
      }
    })
}
uploadImage(target: any){
  this.photo = target.files[0];
}
}
