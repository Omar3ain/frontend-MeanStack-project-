import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from 'src/app/sharedComponents/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';

import { BookRoutingModule } from './book-routing.module';
import { BooksComponent  } from './components/books/books.component';
import { BookComponent } from './components/book/book.component';

@NgModule({
  declarations: [BooksComponent , BookComponent,
    SearchBarComponent],
  imports: [
    CommonModule,
    BookRoutingModule
  ]
})
export class BookModule { }
