import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthorRoutingModule } from './author-routing.module';
import { ListAuthorsComponent } from './components/list-authors/list-authors.component';
import { AuthorDetailesComponent } from './components/author-detailes/author-detailes.component';
import { AuthorComponent } from './components/author/author.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [ListAuthorsComponent, AuthorDetailesComponent, AuthorComponent],
  imports: [
    CommonModule,
    AuthorRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    NgbModule
  ]
})
export class AuthorModule { }
