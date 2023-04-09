import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { UserService } from '../../libModules/profile/services/user.service';
import IUserUpdate from '../../libModules/profile/Interfaces/user';
import { ToastrService } from 'ngx-toastr';
import toastr_options from 'src/app/utils/toastr.options';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  logoPath = 'assets/logo.png';
  siteName = 'Booky Tooky';
  navbarCollapsed = true;
  isAuthenticated : boolean = false;
  user!: IUserUpdate; 
  constructor(private _authService : AuthService,
    private _userService: UserService,
    private toastr: ToastrService){
    this.isAuthenticated = this._authService.isAuthenticated();
    this

  }
  ngOnInit(): void {
    this.isAuthenticated = this._authService.isAuthenticated()
    this._userService.getUser().subscribe({
      next : (data) => {
        this.user = data
      },
      error : (error) => {
        let {error : {message}}  = error;
        if(!message) message = error.message;
        this.toastr.error(`MESSAGE : ${message}`,'Could not Load user data',toastr_options);
      }
    })
  }
  navbarToggler(){
    document.getElementById('navbarNavDropdown')?.classList.toggle('show');
  }

  dropDownToggler(){
    document.getElementById('dropdown-list')?.classList.toggle('show');
    document.getElementById('dropdown-menu')?.classList.toggle('show');
  }
  logOut(){
    this._authService.logOut();
    this.isAuthenticated = this._authService.isAuthenticated()
  }
}
