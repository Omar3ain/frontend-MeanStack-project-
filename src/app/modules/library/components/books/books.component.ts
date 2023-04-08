import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  title = "hello wrold hello world hello  aweqw qwe ae qweqweqwe qwe qwworld"
  bookTitle = (this.title.length > 50) ? this.title.substring(0,30) : this.title;
  books: any[] = [];
  constructor(private BookService: BookService){
    this.BookService.getBooks().subscribe((books) => {
      this.books = books
      this.books.map((book) => {
        book.name = (book.name.length > 50) ? book.name.substring(0,30) : book.name;
      })
    });
  }
}
