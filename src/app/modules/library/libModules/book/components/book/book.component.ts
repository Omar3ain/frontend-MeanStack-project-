import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import { CategoryService } from '../../../category/services/category.service';
import { AuthorService } from '../../../author/services/author.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  id: string = '';
  book: any;
  ratingInputValue = '';
  commentInputValue = '';
  CategoryService: any;
  reviewForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private BookService: BookService,
    private formBuilder: FormBuilder
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.getBookDetails();
    this.reviewForm = this.formBuilder.group({
      comment: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  getBookDetails() {
    this.BookService.getBook(this.id).subscribe((book) => {
      this.book = book;
      this.book.averageRating = Math.floor(this.book.reviews.reduce((average: any, review:any) => average + review.rating, 0) / this.book.reviews.length);
    });
  }

  submitReview(){
    if(!this.ratingInputValue || Number(this.ratingInputValue) > 5 || Number(this.ratingInputValue) < 0){
      return console.log("must change rating input value from 1 star to 5")
    }
    this.BookService.postReview(this.book._id, {rating: Number(this.ratingInputValue), comment: this.reviewForm.value.comment}).subscribe((response) => {
      this.ratingInputValue = '';
      this.reviewForm.reset();
      this.getBookDetails();
    })
  }

  ratingInputValueChange(e: number) {
    this.ratingInputValue = e.toString();
  }

  async ngOnInit() {}
  getBook(): any {
    return this.book;
  }
}
