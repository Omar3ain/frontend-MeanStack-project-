import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchValue: string = '';

  @Output() searchEvent = new EventEmitter<string>();

  searchChange () {
    this.searchEvent.emit(this.searchValue);
  }
}
