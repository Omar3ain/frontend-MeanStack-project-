import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,
      Validators.minLength(6),
      Validators.pattern("^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()])(?=.*[0-9]).+$")]]
    });
  }
  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe(res => {
      this.authService.setCookie(res.token, res.isAdmin);
      this.router.navigate(['/']);
    },
      error => { console.log(error); }
    );
  }

  navigate() {
    this.router.navigate(['/auth/register']);
  }
}

