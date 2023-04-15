import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import  toastr_options  from "../../../../../utils/toastr.options";
import { ToastrService } from 'ngx-toastr';
import { AuthorService } from '../../../services/author.service';
@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit{

  authorForm: FormGroup;
  photo: File | undefined;

  constructor(
    private formBuilder: FormBuilder, 
    private _authorService : AuthorService ,
    private toastr: ToastrService,) {

    this.authorForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      photo : [''],
    });
  }
  ngOnInit(): void {
  }
  onSubmit() {
    this._authorService.addNewAuthor(this.authorForm.value,this.photo!).subscribe({
      next : () =>{
        this._authorService.buttonClicked.emit();
        this.toastr.success(`Data Inserted successfully`,'Insert status',toastr_options);
      },
      error : (error : any) => {
        let {error : {message}}  = error;
        if(!message) message = error.message;
        this.toastr.error(`MESSAGE : ${message}`,'Could not add Author data',toastr_options);
      }
    })
  }

  uploadImage(target: any){
    this.photo = target.files[0];
  }

}
