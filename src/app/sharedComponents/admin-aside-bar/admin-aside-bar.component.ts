import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-admin-aside-bar',
  templateUrl: './admin-aside-bar.component.html',
  styleUrls: ['./admin-aside-bar.component.css']
})
export class AdminAsideBarComponent {

  constructor(private authService: AuthService, private router: Router){}
  logout(){
    this.authService.logOut()
    this.router.navigate(['/auth/login']);
  }
}
