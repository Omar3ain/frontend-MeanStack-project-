import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBooksComponent } from './components/books/list-books/list-books.component';
import { ListComponent as ListCategories } from './components/categories/list/list.component';
import { AdminGuard } from 'src/app/Guard/admin/admin.guard';

const routes: Routes = [
  {path: 'categories/list', data: { title: 'Library categories' } ,component: ListCategories},
  {path: 'books/list', data: { title: 'Library books' } , component: ListBooksComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
