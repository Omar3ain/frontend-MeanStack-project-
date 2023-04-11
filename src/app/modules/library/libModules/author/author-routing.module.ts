import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAuthorsComponent } from './components/list-authors/list-authors.component';
import { AuthorDetailesComponent } from './components/author-detailes/author-detailes.component';

const routes: Routes = [
  { path: '', component: ListAuthorsComponent },
  { path: ':id', component: AuthorDetailesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorRoutingModule { }
