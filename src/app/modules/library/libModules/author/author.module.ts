import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAuthorsComponent } from './components/list-authors/list-authors.component';
import { AuthorComponent } from './components/author/author.component';
import { AuthorDetailesComponent } from './components/author-detailes/author-detailes.component';



@NgModule({
  declarations: [

    ListAuthorsComponent,
    AuthorComponent,
    AuthorDetailesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthorModule { }
