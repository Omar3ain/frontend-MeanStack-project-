import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { BooksComponent } from './components/books/books.component';


const routes: Routes = [
  { path: '', data: { title: 'Books' }, component:  BooksComponent},
  { path: ':id', data: { title: 'Book Details' }, component:  BookComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
