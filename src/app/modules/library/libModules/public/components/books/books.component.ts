import { Component } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  ngOnInit() {
    AOS.init();
  }
}
