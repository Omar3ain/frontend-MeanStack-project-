import { Component } from '@angular/core';

@Component({
  selector: 'app-book-cover',
  templateUrl: './book-cover.component.html',
  styleUrls: ['./book-cover.component.css']
})
export class BookCoverComponent {
  bookOneCoverPath: string = 'assets/library/book1.jpg';
  bookTwoCoverPath: string = 'assets/library/book2.jpg';
  bookThreeCoverPath: string = 'assets/library/book3.jpg';
}
