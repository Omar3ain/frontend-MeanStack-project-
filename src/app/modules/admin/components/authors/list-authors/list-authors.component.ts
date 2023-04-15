import { Component } from '@angular/core';
import { AuthorService } from '../../../services/author.service';
import { ToastrService } from 'ngx-toastr';
import toastr_options from "../../../../../utils/toastr.options";
import swalOptions from "../../../../../utils/swal.options";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {  UpdateAuthorComponent } from '../update-author/update-author.component'
import { AddAuthorComponent } from '../add-author/add-author.component'
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-authors',
  templateUrl: './list-authors.component.html',
  styleUrls: ['./list-authors.component.css']
})
export class ListAuthorsComponent {
  authors: authorElement[] = [];
  page: number = 1;
  dialogConfig = new MatDialogConfig();
  searchTerm : string = '';
  constructor(private _authorService: AuthorService, private toastr: ToastrService, public dialog: MatDialog) {
    this._authorService.buttonClicked.subscribe(() => {
      this.getAuthors();
    })
  }
  get filteredAuthors(): authorElement[] {
    return this.authors.filter(author =>
      author.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      author.lastName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  ngOnInit() {
    this.getAuthors();
  }

  ngAfterViewInit() {
  }
  openAddDialog() {

    const dialogRef = this.dialog.open(AddAuthorComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openUpdateDialog(id: string) {
    this.dialogConfig.data = {
      authorId: id
    };
    const dialogRef = this.dialog.open(UpdateAuthorComponent, this.dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getAuthors() {
      this._authorService.getAuthors().subscribe({
        next: (data: any) => {

          this.authors = data.map((categroy: any, index: number) => ({
            ...categroy,
            id: index + 1
          }));
        },
        error: (error) => {
          let { error: { message } } = error;
          if (!message) message = error.message;
          this.toastr.error(`MESSAGE : ${message}`, 'Could not load categroys data', toastr_options);
        }
      }
    );
  }

  deleteAuthor(id: string) {
    swal.fire(swalOptions.deleteAuthorOptions).then((result) => {
        if (result.value) {
          this._authorService.deleteAuthor(id).subscribe({
              next: (data) => {
                this._authorService.buttonClicked.emit();
                this.toastr.success(`Data Deleted successfully`, 'Insert status', toastr_options);
              },
              error: (error) => {
                let { error: { message } } = error;
                if (!message) message = error.message;
                this.toastr.error(`MESSAGE : ${message}`, 'Could not delete categroy data', toastr_options);
              }
            }
          )
        }
      }
    )
  }

}

export interface authorElement {
  id?: number;
  _id?: string;
  firstName: string;
  lastName: string;
  dob: Date;
  photo?: string,
  createdAt: string;
  updatedAt: string;
  __v: number;
}
