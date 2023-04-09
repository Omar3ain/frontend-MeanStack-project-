import { Component  , OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import IUserUpdate from '../../Interfaces/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user!: IUserUpdate;

  constructor(private userService: UserService) {
  
    this.userService.btnClicked.subscribe(() => {
      this.showUser();
    })
    
  }
  ngOnInit(): void {
   this.showUser()
  }
  


  showUser() {
    this.userService.getUser().subscribe((user) => this.user = user);
  }
}
