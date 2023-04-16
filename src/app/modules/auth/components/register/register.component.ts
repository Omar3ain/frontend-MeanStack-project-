import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import toastr_options from 'src/app/utils/toastr.options';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  avatar!: File;

  constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder, private toastr: ToastrService, private titleService: Title, private _route: ActivatedRoute) {

    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,
      Validators.minLength(6),
      Validators.pattern("^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()])(?=.*[0-9]).+$")]]
    });
  }
  ngOnInit(): void {
    this.titleService.setTitle(this._route.snapshot.data['title']);
  }
  onSubmit() {

    if (!this.registerForm.valid || !this.avatar) {
      this.toastr.error('Missing Field', 'Could not register', toastr_options);
      return;
    }

    const formData = new FormData();
    formData.append('firstName', this.registerForm.get('firstName')?.value);
    formData.append('lastName', this.registerForm.get('lastName')?.value);
    formData.append('email', this.registerForm.get('email')?.value);
    formData.append('password', this.registerForm.get('password')?.value);
    formData.append('avatar', this.avatar);

    this.authService.register(formData).subscribe({
      next: () => {
        this.toastr.success(`Registered successfully`, 'Insert status', toastr_options);
        this.router.navigate(['/auth/login']);
      },
      error: (error) => {
        let { error: { message } } = error;
        if (!message) message = error.message;
        this.toastr.error(`MESSAGE : ${message}`, 'Could not register', toastr_options);
      }
    })
  }
  onFileChange(event: any) {
    this.avatar = event.target.files[0];
  }

  navigate() {
    this.router.navigate(['/auth/login']);
  }
}
