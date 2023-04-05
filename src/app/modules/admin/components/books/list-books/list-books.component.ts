import {AfterViewInit, Component, ViewChild , OnInit} from '@angular/core';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements AfterViewInit, OnInit {
  books: bookElement[] = [];
  page : number = 1;
  // filterBooks : string = '';
  // _filterBooks : string = '';
  
  constructor(private bookService: BookService) { }

  // filteredBooks: any[] = [];
  // get listFilter(): string {
  //   return this. _filterBooks;
  // }

  // set listFilter(value: string) {
  //   this. _filterBooks = value;
  //   this.filteredBooks = this.listFilter ? this.performFilter(this.listFilter) : this.books;
  // }

  // performFilter(filterBy: string): any[] {
  //   filterBy = filterBy.toLocaleLowerCase();

  //   return this.books.filter((book: any) => {
  //     return (book.name != null && book.name.toLocaleLowerCase().indexOf(filterBy) !== -1) 
  //   })
  // }

  ngOnInit() {
    this.getBooks();
  }

  ngAfterViewInit() {
  }

  getBooks() {
    this.bookService.getBooks().subscribe({
      next : (data: any) => {
        this.books = data.map((book: any, index: number) => ({
          ...book,
          id: index + 1
        }));
      },
      error: (err) => {
        (error: any) => console.log(error)
      },
      
    });
  }
}

export interface bookElement {
  id: number;
  name: string;
  position: number;
  coverPhoto : string;
  authorId: string;
  shelve: string;
  categoryId: string;
  description: string;
  reviews? : []
  createdAt: string;
  updatedAt: string;
  __v : number;
}
