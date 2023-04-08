import { Component } from '@angular/core';
import { AuthorService } from '../../services/author.service';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  authors: author[] = []
  constructor(private _author: AuthorService) {

  }

  ngOnInit(): void {
    this._author.getAuthors().subscribe((res: any) => {
      this.authors = res;
    })
  }
}
interface author {
  firstName: string
  lastName: string
  dob: Date
  photo: string
}
