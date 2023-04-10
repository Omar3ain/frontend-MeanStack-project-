import { Component, Input } from '@angular/core';
import { AuthorService } from '../../services/author.service';
import { author } from '../list-authors/list-authors.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  @Input() author: author = {
    _id: '',
    firstName: '',
    lastName: '',
    dob: new Date(),
    photo: '',
    description: ''
  }
  authors: author[] = []
  constructor(private _author: AuthorService, private _router: Router) {

  }

  ngOnInit(): void {

  }
  // onAuthorSelected(author: author) {
  //   this._router.navigate(['/author', author._id])
  // }
  print() {
  }
}
