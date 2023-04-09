import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BooksComponent  } from './components/books/books.component';
import { BookComponent } from './components/book/book.component';

@NgModule({
  declarations: [BooksComponent , BookComponent],
  imports: [
    CommonModule,
    BookRoutingModule
  ]
})
export class BookModule { }
