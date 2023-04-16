import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAuthorsComponent } from './components/list-authors/list-authors.component';
import { AuthorDetailesComponent } from './components/author-detailes/author-detailes.component';

const routes: Routes = [
  { path: '', data: { title: 'Authors' }, component: ListAuthorsComponent },
  { path: ':id',data: { title: 'Author Details' }, component: AuthorDetailesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorRoutingModule { }
