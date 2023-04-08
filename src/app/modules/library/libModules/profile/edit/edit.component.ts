import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/profile/user.service';
import toastr_options from 'src/app/utils/toastr.options';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  editForm!: FormGroup;
  avatar!: File;

  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService, private toastr: ToastrService) {

    this.editForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: ['', Validators.email],
      oldPassword: [''],
      newPassword: ['', [Validators.minLength(6), Validators.pattern("^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()])(?=.*[0-9]).+$")]]
    });
  }

  onSubmit() {

    if (!this.editForm.valid) {
      return;
    }

    const formData = new FormData();
    if (this.editForm.get('firstName')?.dirty) {
      formData.append('firstName', this.editForm.get('firstName')?.value);
    }
    if (this.editForm.get('lastName')?.dirty) {
      formData.append('lastName', this.editForm.get('lastName')?.value);
    }
    if (this.editForm.get('email')?.dirty) {
      formData.append('email', this.editForm.get('email')?.value);
    }
    if (this.editForm.get('oldPassword')?.value && this.editForm.get('newPassword')?.value) {
      formData.append('oldPassword', this.editForm.get('oldPassword')?.value);
      formData.append('newPassword', this.editForm.get('newPassword')?.value);
    } else if ((this.editForm.get('oldPassword')?.value && !this.editForm.get('newPassword')?.value) ||
      (!this.editForm.get('oldPassword')?.value && this.editForm.get('newPassword')?.value)) {
      this.toastr.error('Please enter both old and new passwords', 'Error', toastr_options);
      return;
    }
    if (this.avatar) {
      formData.append('avatar', this.avatar);
    }

    this.userService.editUser(formData).subscribe({
      next: () => {
        this.toastr.success(`Data Inserted successfully`, 'Insert status', toastr_options);
        this.userService.btnClicked.emit();
        this.editForm.reset();
      },
      error: (error) => {
        let { error: { message } } = error;
        if (!message) message = error.message;
        this.toastr.error(`MESSAGE : ${message}`, 'Could not edit user', toastr_options);
        this.editForm.reset();
      }
    });
  }

  onFileChange(event: any) {
    this.avatar = event.target.files[0];
  }
}
