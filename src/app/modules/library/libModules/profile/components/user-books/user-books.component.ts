import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import toastr_options from 'src/app/utils/toastr.options';

@Component({
  selector: 'app-user-books',
  templateUrl: './user-books.component.html',
  styleUrls: ['./user-books.component.css']
})
export class UserBooksComponent implements OnInit {
  books: any = [];
  pageSize: number = 10;
  page: number = 1;
  shelfOptions: { [key: string]: string } = {
    read: 'Read',
    want_to_read: 'Want to Read',
    currently_reading: 'Currently Reading'
  };
  shelfOptionKeys = Object.keys(this.shelfOptions);
  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getBooks('all');
  };

  getBooks(shelf: string) {
    let skip: number = (this.page - 1) * this.pageSize;
    let limit: number = this.pageSize;
    this.userService.getuserBooks(shelf, skip, limit).subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (error) => {
        let { error: { message } } = error;
        if (!message) message = error.message;
        this.toastr.error(`MESSAGE : ${message}`, 'Could not load user books data', toastr_options);
      }

    })
  }
}
