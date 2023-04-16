import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import toastr_options from 'src/app/utils/toastr.options';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private router: Router, private authService: AuthService, private formBuilder: FormBuilder, private toastr: ToastrService, private titleService: Title, private _route: ActivatedRoute) {
    this.loginForm = this.formBuilder.group({
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
    this.authService.login(this.loginForm.value).subscribe({
      next: (res) => {
        this.authService.setCookie(res.token, res.isAdmin);
        if (res.isAdmin) {
          this.router.navigate(['/admin/books/list']);
        } else {
          this.router.navigate(['/']);
        }
      },
      error: (error) => {
        let { error: { message } } = error;
        if (!message) message = error.message;
        this.toastr.error(`MESSAGE : ${message}`, 'Could not log in', toastr_options);
      },
    })
  }
  navigate() {
    this.router.navigate(['/auth/register']);
  }
}

