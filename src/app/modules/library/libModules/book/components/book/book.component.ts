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
  imgUrl = 'http://localhost:3000/uploads/books/coverPhoto33-1680278525893.jpg';
  id: string = '';
  book: any;
  CategoryService: any;
  constructor(
    private route: ActivatedRoute,
    private BookService: BookService,
    CategoryService: CategoryService,
    AuthorService: AuthorService
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.BookService.getBook(this.id).subscribe((book) => {
      this.book = book;
      this.book.averageRating = Math.floor(this.book.reviews.reduce((average: any, review:any) => average + review.rating, 0) / this.book.reviews.length);
      console.log(this.book.averageRating)
      CategoryService.getCategory(book.categoryId).subscribe((category) => {
        book.category = category.category.name;
      });
      AuthorService.getAuthor(book.authorId).subscribe((author) => {
        book.author = author.firstName + ' ' + author.lastName;
      });
    });
  }
  async ngOnInit() {}
  getBook(): any {
    return this.book;
  }
}
