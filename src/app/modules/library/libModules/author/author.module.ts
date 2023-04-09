import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { ListAuthorsComponent } from './components/list-authors/list-authors.component';
import { AuthorDetailesComponent } from './components/author-detailes/author-detailes.component';
import { AuthorComponent } from './components/author/author.component';


@NgModule({
  declarations: [ListAuthorsComponent,AuthorDetailesComponent,AuthorComponent],
  imports: [
    CommonModule,
    AuthorRoutingModule
  ]
})
export class AuthorModule { }
