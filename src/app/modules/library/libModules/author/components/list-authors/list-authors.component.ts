import { Component } from '@angular/core';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-list-authors',
  templateUrl: './list-authors.component.html',
  styleUrls: ['./list-authors.component.css']
})
export class ListAuthorsComponent {
  authors: author[] = []
  constructor(private _author: AuthorService) {

  }

  ngOnInit(): void {
    this._author.getAuthors().subscribe((res: any) => {
      this.authors = res;
    })
  }
}

export interface author {
  firstName: string
  lastName: string
  dob: Date
  photo: string
}
