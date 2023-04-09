import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from '../../components/books/books.component';
import { BookComponent } from '../../components/book/book.component';
import { SearchBarComponent } from 'src/app/sharedComponents/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BooksComponent,
    BookComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class BookModule { }
