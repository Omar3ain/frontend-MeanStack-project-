import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import toastr_options from 'src/app/utils/toastr.options';
import { ToastrService } from 'ngx-toastr';
import { author } from '../list-authors/list-authors.component';
import { BookService } from '../../../book/services/book.service';
import { AuthorService } from '../../services/author.service';


@Component({
  selector: 'app-author-detailes',
  templateUrl: './author-detailes.component.html',
  styleUrls: ['./author-detailes.component.css']
})
export class AuthorDetailesComponent {
  id: string = '';
  myauthor!: author
  books!: Book[];
  maxRating: number = 5;
  avgRate: number = 0;

  shelve: string = ''
  shelfOptions: { [key: string]: string } = {
    read: 'Read',
    want_to_read: 'Want to Read',
    currently_reading: 'Currently Reading'
  };
  shelfOptionKeys = Object.keys(this.shelfOptions);
  constructor(private _author: AuthorService, private toastr: ToastrService, private _activatedRouter: ActivatedRoute, private _book: BookService) {

  }
  ngOnInit(): void {
    this.id = this._activatedRouter.snapshot.params['id']
    this._author.getAuthorsById(this.id).subscribe((response) => {
      this.myauthor = response;
    })
    this._author.getAuthorBooks(this.id).subscribe((response) => {
      this.books = response;

    })
  }


  getAvgRating(book: Book) {
    return this.getBookRating(book.reviews);

  }
  getBookRating(reviews: Review[]): number {
    if (!reviews || reviews.length === 0) {
      return 0;
    }
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return this.avgRate = sum / reviews.length;
  }

  updateShelve(bookId: string, shelve: string, oldShelve: string) {
    this._book.patchShelve(bookId, shelve).subscribe(res => {
      this.toastr.success(`you put this book in : ${shelve} shelve`, 'selve change successfully', toastr_options);

    })
  }

}
export interface Book {
  _id: string
  coverPhoto: string;
  name: string;
  authorId: string;
  shelve: 'read' | 'want_to_read' | 'currently_reading' | "none";
  categoryId: string;
  description: string;
  avgRate: number
  reviews: Review[];
}

export interface Review {
  userId: string;
  username: string;
  rating: number;
  comment: string;
}
