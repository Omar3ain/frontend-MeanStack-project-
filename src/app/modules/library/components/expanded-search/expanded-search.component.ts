import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expanded-search',
  templateUrl: './expanded-search.component.html',
  styleUrls: ['./expanded-search.component.css']
})
export class ExpandedSearchComponent {
  searchValue: string = "";
  searchGroup: FormGroup = new FormGroup({
    "search": new FormControl("", Validators.required)
  });
  constructor(private router: Router) {}

  search() {
    this.router.navigateByUrl('/books?name=' + this.searchGroup.value.search);
  }
}
