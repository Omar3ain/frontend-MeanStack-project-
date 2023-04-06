import { Component , OnInit} from '@angular/core';
import { BookService } from '../../../services/book.service';
import { ToastrService } from 'ngx-toastr';
import  toastr_options  from "../../../../../utils/toastr.options";
import {MatDialog} from '@angular/material/dialog';
import {AddBookComponent} from '../add-book/add-book.component'
@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {
  books: bookElement[] = [];
  page : number = 1;

  // filterBooks : string = '';
  // _filterBooks : string = '';
  
  constructor(private bookService: BookService, private toastr: ToastrService,public dialog: MatDialog) { }

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
  openDialog() {
    const dialogRef = this.dialog.open(AddBookComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
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
        this.toastr.error(`MESSAGE : ${err.message}`,'Could not load books data',toastr_options );
      }
      
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
