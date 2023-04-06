import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  avatar!: File;

  constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder) {

    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,
      Validators.minLength(6),
      Validators.pattern("^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()])(?=.*[0-9]).+$")]]
    });
  }
  onSubmit() {

    if (!this.registerForm.valid || !this.avatar) {
      return;
    }

    const formData = new FormData();
    formData.append('firstName', this.registerForm.get('firstName')?.value);
    formData.append('lastName', this.registerForm.get('lastName')?.value);
    formData.append('email', this.registerForm.get('email')?.value);
    formData.append('password', this.registerForm.get('password')?.value);
    formData.append('avatar', this.avatar);

    this.authService.register(formData).subscribe(res => {
      this.router.navigate(['/login']);
    },
      error => { console.log(error); }
    );
  }
  onFileChange(event: any) {
    this.avatar = event.target.files[0];
  }
}
