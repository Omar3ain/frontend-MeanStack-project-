import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBooksComponent } from './components/books/list-books/list-books.component';
import { ListCategoriesComponent } from './components/categories/list-categories/list-categories.component';
import { ListAuthorsComponent } from './components/authors/list-authors/list-authors.component';


const routes: Routes = [
  {path: 'categories/list', data: { title: 'Library categories' } ,component: ListCategoriesComponent},
  {path: 'books/list', data: { title: 'Library books' } , component: ListBooksComponent},
  {path: 'authors/list', data: { title: 'Library authors' } , component: ListAuthorsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
