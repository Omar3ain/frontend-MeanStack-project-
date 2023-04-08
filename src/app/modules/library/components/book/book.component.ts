import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  imgUrl = 'http://localhost:3000/uploads/books/coverPhoto33-1680278525893.jpg';
  id : string ="";
  book: any;
  constructor (private route: ActivatedRoute, private BookService: BookService) {
    this.route.params.subscribe(params => {
      this.id = params['id']
    })
    this.BookService.getBook(this.id).subscribe(book => {
      this.book = book
    })
  }
  async ngOnInit () {
  }
  getBook() : any {
    return this.book;
  }
}
