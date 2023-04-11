import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import toastr_options from 'src/app/utils/toastr.options';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../profile/services/user.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  id: string = '';
  book: any;
  ratingInputValue = 0;
  commentInputValue = '';
  CategoryService: any;
  reviewForm: FormGroup;
  userBookDetails: any;
  shelve: string = '';
  constructor(
    private route: ActivatedRoute,
    private BookService: BookService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private userService: UserService,
    private bookService: BookService
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.getBookDetails();
    this.reviewForm = this.formBuilder.group({
      comment: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onShelveChange(e: Event) {
    console.log(this.shelve);
    this.bookService.patchShelve(this.id, this.shelve).subscribe(res => {
      this.toastr.success(`you put this book in : ${this.shelve} shelve`, 'selve change successfully', toastr_options);
      console.log(res)
    })
  }

  getUserBookDetails(bookId: string) {
    this.userService.getUser().subscribe(user => {
      this.userBookDetails = user.books?.find((book :any) => {
        return book._id === bookId
      })
      this.shelve = this.userBookDetails.shelve;
      console.log(this.userBookDetails)
    })
  }

  getBookDetails() {
    this.BookService.getBook(this.id).subscribe((book) => {
      this.book = book;
      this.book.averageRating = Math.floor(this.book.reviews.reduce((average: any, review:any) => average + review.rating, 0) / this.book.reviews.length);
      this.getUserBookDetails(this.book._id);
    });
  }

  submitReview(){
    if(!this.ratingInputValue || Number(this.ratingInputValue) > 5 || Number(this.ratingInputValue) < 0){
      // return console.log("must change rating input value from 1 star to 5")
      this.toastr.error(`must change rating input value from 1 star to 5`, 'Validation Error', toastr_options);
      return;
    }
    this.BookService.postReview(this.book._id, {rating: Number(this.ratingInputValue), comment: this.reviewForm.value.comment}).subscribe(
    {
      next: () => {
        this.toastr.success(`reviewing successfully`, 'Insert status', toastr_options);
        this.ratingInputValue = 0;
        this.reviewForm.reset();
        this.getBookDetails();
      },
      error: (error) => {
        let { error: { message } } = error;
        if (!message) message = error.message;
        this.toastr.error(`MESSAGE : ${message}`, 'Could not reviwing', toastr_options);
        this.reviewForm.reset();
      }
    }
    )
  }

  ratingInputValueChange(e: number) {
    this.ratingInputValue = e;
  }

  async ngOnInit() {}
  getBook(): any {
    return this.book;
  }
}
