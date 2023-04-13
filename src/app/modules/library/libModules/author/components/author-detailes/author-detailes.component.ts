import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  maxRatingArray = [];


  constructor(private _author: AuthorService, private _activatedRouter: ActivatedRoute, private _book: BookService) {

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
  getStarList(rating: number): any[] {
    let starList: any[] = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        starList.push({ filled: true, cssClass: 'filled-star' });
      } else {
        starList.push({ filled: false, cssClass: 'empty-star' });
      }
    }
    return starList;
  }

  getAuthorRatings(authorId: string): number[] {
    const ratings: number[] = [];
    this.books.forEach((book) => {
      if (book.authorId.toString() === authorId.toString()) {
        book.reviews?.forEach((review) => {
          ratings.push(review.rating);
        });
      }
    });
    return ratings;
  }
  getBookRating(reviews: Review[]): number {
    if (!reviews || reviews.length === 0) {
      return 0;
    }
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return sum / reviews.length;
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
  reviews?: Review[];
}

export interface Review {
  userId: string;
  username: string;
  rating: number;
  comment: string;
}
