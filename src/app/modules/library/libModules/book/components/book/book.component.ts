import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import { CategoryService } from '../../../category/services/category.service';
import { AuthorService } from '../../../author/services/author.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  id: string = '';
  book: any;
  CategoryService: any;
  constructor(
    private route: ActivatedRoute,
    private BookService: BookService,
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.BookService.getBook(this.id).subscribe((book) => {
      this.book = book;
      console.log(book)
      this.book.averageRating = Math.floor(this.book.reviews.reduce((average: any, review:any) => average + review.rating, 0) / this.book.reviews.length);
    });
  }
  async ngOnInit() {}
  getBook(): any {
    return this.book;
  }
}
