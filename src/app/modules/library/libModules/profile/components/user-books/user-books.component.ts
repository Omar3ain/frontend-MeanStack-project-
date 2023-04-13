import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import toastr_options from 'src/app/utils/toastr.options';
import { Router } from '@angular/router';
import { BookService } from '../../../book/services/book.service';

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

  constructor(private userService: UserService, private toastr: ToastrService, private router: Router, private bookService: BookService) { }

  ngOnInit() {
    this.getBooks('all');
  };

  getBooks(shelf: string) {
    let skip: number = (this.page - 1) * this.pageSize;
    let limit: number = this.pageSize;
    this.userService.getuserBooks(shelf, skip, limit).subscribe({
      next: (data) => {
        this.books = data;
        console.log(this.books);
      },
      error: (error) => {
        let { error: { message } } = error;
        if (!message) message = error.message;
        this.toastr.error(`MESSAGE : ${message}`, 'Could not load user books data', toastr_options);
      }

    })
  }

  editRate(book: any, newRating: number) {
    book.rating = newRating;
    if (book.rating) {
      const formData = new FormData();
      formData.append('rating', book.rating);
      this.bookService.editUserRate(book._id, formData).subscribe({
        next: () => {
          this.toastr.success(`you updated your rate ${book.rating}`, 'Rating is changed successfully', toastr_options);
        },
        error: (error) => {
          let { error: { message } } = error;
          if (!message) message = error.message;
          this.toastr.error(`MESSAGE : ${message}`, 'Could not update Rating', toastr_options);
        }
      });
    }
  }

  navigateBook(id: string) {
    this.router.navigate([`/books/${id}`]);
  }

  navigateAuthor(id: string) {
    this.router.navigate([`/authors/${id}`]);
  }
}
