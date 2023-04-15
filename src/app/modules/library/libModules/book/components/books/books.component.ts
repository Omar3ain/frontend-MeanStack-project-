import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { CategoryService } from '../../../category/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  bookName: string = '';
  category: string = '';
  author: string = '';
  skip: string = '0';
  limit: string = '10';
  books: any[] = [];
  query:string ='';
  categories: any[] = [];
  countOfBooks: number = 0;
  pageIndex: number = 0;
  page: number = 1;
  subjectsKeyUp = {
    category : new Subject(),
    author: new Subject(),
    bookName: new Subject(),
  };
  constructor(
    private BookService: BookService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.pageIndex = 0;
    this.initial();
    this.query = `?name=${this.bookName}&category=${this.category}&author=${this.author}`;
    this.BookService.getBooksCount(this.query).subscribe(booksCount => {
      this.countOfBooks = booksCount;
    })
    this.search()
  }

  initial() {
    this.route.queryParams.subscribe(params => {
      this.bookName = params['name'] || '';
      this.category = params['category'] || '';
      this.author = params['author'] || '';
      this.page = params['page'] || 1;
      this.pageIndex = this.page - 1 || 0;
    })
  }

  clearFilter (){
    console.log(this.pageIndex)
    this.bookName = this.category = this.author = '';
    this.pageIndex = 0;
    this.page = 1;
    this.router.navigate([], {
      queryParams: {name: '', category: '', author:'', page: this.page},
      queryParamsHandling: 'merge'
    });
    this.search()
  }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories.categories);
    this.subjectsKeyUp.bookName.pipe(debounceTime(3000)).subscribe( bookName => {
      this.search()
    })
    this.subjectsKeyUp.category.pipe(debounceTime(3000)).subscribe( category => {
      this.search()
    })
    this.subjectsKeyUp.author.pipe(debounceTime(3000)).subscribe( author => {
      this.search()
    })
  }

  getBooks(query: string){
    this.BookService.getBooks(`?name=${this.bookName}&category=${this.category}&author=${this.author}&page=${this.page}`).subscribe((books) => {
      this.books = books;
      this.books.map((book) => {
        book.name =
          book.name.length > 50 ? book.name.substring(0, 30) : book.name;
        book.averageRating = Math.floor(book.reviews.reduce((average: any, review: any) => average + review.rating, 0) / book.reviews.length);
      });
    });
  }

  handlebookName(e: Event) {
    this.bookName = (e?.target as HTMLInputElement)?.value;
  }

  onSearchByChange(input: Event) {
    const inputValue = (input.target as HTMLInputElement).value
    this.router.navigate([], {
      queryParams: { name: inputValue },
      queryParamsHandling: 'merge',
    });
    this.subjectsKeyUp.bookName.next(this.bookName)
  }

  changePage(e:any){
    this.page = e.pageIndex + 1;
    this.router.navigate([], {
      queryParams: { page: this.page },
      queryParamsHandling: 'merge',
    });
    this.search();
  }

  onAuthorByChange(input: Event) {
    const inputValue = (input.target as HTMLInputElement).value
    this.router.navigate([], {
      queryParams: { author: inputValue },
      queryParamsHandling: 'merge',
    });
    this.subjectsKeyUp.author.next(this.author)
  }

  onCategoryByChange(input: Event) {
    const inputValue = (input.target as HTMLInputElement).value
    this.router.navigate([], {
      queryParams: { category: inputValue },
      queryParamsHandling: 'merge',
    });
    this.subjectsKeyUp.category.next(this.category)
  }

  search() {
    this.BookService.getBooks(`?name=${this.bookName}&category=${this.category}&author=${this.author}&page=${this.page}`).subscribe(books => {
      this.books = books
    });
  }

  getCategory(name : string){
    const queryParams = {
      category: name,
    };
    this.router.navigate(['/books'] ,{queryParams})
  }
}
