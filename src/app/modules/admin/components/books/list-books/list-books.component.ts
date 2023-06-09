import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/book.service';
import { ToastrService } from 'ngx-toastr';
import toastr_options from "../../../../../utils/toastr.options";
import swalOptions from "../../../../../utils/swal.options";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddBookComponent } from '../add-book/add-book.component'
import { UpdateBookComponent } from '../update-book/update-book.component'
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {
  books: bookElement[] = [];
  page: number = 1;
  dialogConfig = new MatDialogConfig();

  searchTerm : string = '';

  constructor(private _bookService: BookService, private toastr: ToastrService, public dialog: MatDialog) {
    this._bookService.buttonClicked.subscribe(() => {
      this.getBooks();
    })
  }

  get filteredBooks(): bookElement[] {
    return this.books.filter(book =>
      book.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  
  ngOnInit() {
    this.getBooks();
  }

  ngAfterViewInit() {
  }
  openAddDialog() {

    const dialogRef = this.dialog.open(AddBookComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openUpdateDialog(id: string) {
    this.dialogConfig.data = {
      bookId: id
    };
    const dialogRef = this.dialog.open(UpdateBookComponent, this.dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getBooks() {
      this._bookService.getBooks().subscribe({
        next: (data: any) => {
          this.books = data.map((book: any, index: number) => ({
            ...book,
            id: index + 1
          }));
          console.log(this.books);
          
        },
        error: (error) => {
          let { error: { message } } = error;
          if (!message) message = error.message;
          this.toastr.error(`MESSAGE : ${message}`, 'Could not load books data', toastr_options);
        }
      }
    );
  }

  deleteBook(id: string) {
    swal.fire(swalOptions.deleteBookOptions).then((result) => {
        if (result.value) {
          this._bookService.deleteBook(id).subscribe({
              next: (data) => {
                this._bookService.buttonClicked.emit();
                this.toastr.success(`Data Deleted successfully`, 'Insert status', toastr_options);
              },
              error: (error) => {
                let { error: { message } } = error;
                if (!message) message = error.message;
                this.toastr.error(`MESSAGE : ${message}`, 'Could not delete book data', toastr_options);
              }
            }
          )
        }
      }
    )
  }

}

export interface bookElement {
  id: number;
  _id: string;
  name: string;
  position: number;
  coverPhoto: string;
  authorId: any;
  shelve: string;
  categoryId: any;
  description: string;
  reviews?: []
  createdAt: string;
  updatedAt: string;
  __v: number;
}
