import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CategoryService } from '../../../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  createCategoryForm: FormGroup;
  constructor(private router: Router, private categoryService: CategoryService, private formBuilder: FormBuilder) {
    this.createCategoryForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      categoryCover: ['']
    });
  }

  onSubmit() {
    this.categoryService.postCategory(this.createCategoryForm.value).subscribe(res => {
      
    },
      error => { console.log(error); }
    );
  }
}