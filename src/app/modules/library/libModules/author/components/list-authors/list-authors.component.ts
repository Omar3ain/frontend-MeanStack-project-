import { Component } from '@angular/core';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-list-authors',
  templateUrl: './list-authors.component.html',
  styleUrls: ['./list-authors.component.css']
})
export class ListAuthorsComponent {
  authors: author[] = []
  currentPage = 1;
  totalPages = 0;
  constructor(private _author: AuthorService) {

  }

  ngOnInit(): void {

    this._author.getAuthors().subscribe((authors: author[]) => {
      this.authors = authors;
      this.totalPages = this._author.totalPages();
    });

  }

  getAuthorsForPage(): author[] {
    return this._author.getAuthorsForPage();
  }

  nextPage(): void {
    this._author.nextPage();
    this.currentPage = this._author.currentPage;
    this.authors = this.getAuthorsForPage();
  }

  previousPage(): void {
    this._author.previousPage();
    this.currentPage = this._author.currentPage;
    this.authors = this.getAuthorsForPage();
  }
}

export interface author {
  _id?: string
  firstName: string
  lastName: string
  dob: Date
  photo: string
  description: string
}
