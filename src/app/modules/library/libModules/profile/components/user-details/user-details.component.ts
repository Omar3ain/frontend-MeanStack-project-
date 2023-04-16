import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import IUserUpdate from '../../Interfaces/user';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user!: IUserUpdate;

  constructor(private userService: UserService, private titleService: Title, private _route: ActivatedRoute) {

    this.userService.btnClicked.subscribe(() => {
      this.showUser();
    })

  }
  ngOnInit(): void {
    this.titleService.setTitle(this._route.snapshot.data['title']);
    this.showUser()
  }



  showUser() {
    this.userService.getUser().subscribe((user) => this.user = user);
  }
}
