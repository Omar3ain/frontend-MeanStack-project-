import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { CategoryService } from '../../services/category.service';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  title = 'hello wrold hello world hello  aweqw qwe ae qweqweqwe qwe qwworld';
  bookTitle = this.title.length > 50 ? this.title.substring(0, 30) : this.title;
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
        CategoryService.getCategory(book.categoryId).subscribe((category) => {
          book.category = category.category.name;
        });
        AuthorService.getAuthor(book.authorId).subscribe((author) => {
          book.author = author.firstName + ' ' + author.lastName;
        });
      });
    });
  }
}
