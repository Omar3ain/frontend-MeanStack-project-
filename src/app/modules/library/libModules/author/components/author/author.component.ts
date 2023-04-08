import { Component, Input } from '@angular/core';
import { AuthorService } from '../../services/author.service';
import { author } from '../list-authors/list-authors.component';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  @Input() author: author = {
    firstName: '',
    lastName: '',
    dob: new Date(),
    photo: ''
  }
  authors: author[] = []
  constructor(private _author: AuthorService) {

  }

  ngOnInit(): void {
    this._author.getAuthors().subscribe((res: any) => {
      this.authors = res;
    })
  }
}
