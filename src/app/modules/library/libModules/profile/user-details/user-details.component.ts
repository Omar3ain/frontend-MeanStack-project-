import { Component } from '@angular/core';
import { UserService } from '../../services/profile/user.service';
import IUserUpdate from '../Interfaces/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  user!: IUserUpdate;

  constructor(private userService: UserService) {
    this.showUser()
    this.userService.btnClicked.subscribe(() => {
      this.showUser();
    })
   }


  showUser() {
    this.userService.getUser().subscribe((user) => this.user = user);
  }
}
