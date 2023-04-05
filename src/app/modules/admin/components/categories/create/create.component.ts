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
  name: string | undefined;
  categoryCover: File | undefined;
  constructor(private formBuilder: FormBuilder) {
    this.createCategoryForm = this.formBuilder.group({
      name: ['', Validators.required],
      categoryCover: ['', Validators.required]
    });
   }

  onFileSelected(event: any) {
    this.categoryCover = event.target.files[0];
  }

  save() {
    // Handle save logic here
  }
}