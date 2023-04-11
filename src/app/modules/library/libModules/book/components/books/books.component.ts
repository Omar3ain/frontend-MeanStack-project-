import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { CategoryService } from '../../../category/services/category.service';
import { AuthorService } from '../../../author/services/author.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  title = 'hello wrold hello world hello  aweqw qwe ae qweqweqwe qwe qwworld';
  bookTitle = this.title.length > 50 ? this.title.substring(0, 30) : this.title;
  searchValue: string = '';
  books: any[] = [];
  constructor(
    private BookService: BookService,
    private CategoryService: CategoryService,
    AuthorService: AuthorService
  ) {
    this.BookService.getBooks().subscribe((books) => {
      this.books = books;
      this.books.map((book) => {
        book.name =
          book.name.length > 50 ? book.name.substring(0, 30) : book.name;
        book.averageRating = Math.floor(book.reviews.reduce((average: any, review: any) => average + review.rating, 0) / book.reviews.length);
      });
    });
  }


  handleSearchValue(e: Event) {
    this.searchValue = (e?.target as HTMLInputElement)?.value;
    console.log(this.searchValue)
  }
}
