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
  selectedFile: any = null;

  registerForm: FormGroup;
  fileInputControl: FormControl;

  constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,
      Validators.minLength(6),
      Validators.pattern("^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()])(?=.*[0-9]).+$")]]
    });
    this.fileInputControl = new FormControl(null, Validators.required);
  }
  onSubmit() {

    if (!this.registerForm.valid || !this.fileInputControl.value) {
      return;
    }
  
    const formData = new FormData();
    formData.append('firstName', this.registerForm.get('firstName')?.value);
    formData.append('lastName', this.registerForm.get('lastName')?.value);
    formData.append('email', this.registerForm.get('email')?.value);
    formData.append('password', this.registerForm.get('password')?.value);
    formData.append('avatar', this.fileInputControl.value);

    this.authService.register(formData).subscribe(res => {
      this.router.navigate(['/login']);
    },
      error => { console.log(error); }
    );
  }

  onFileSelected(event: any): void {
      this.selectedFile = event.target.files[0] ?? null;
  
  }
}
