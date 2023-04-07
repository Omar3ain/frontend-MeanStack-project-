import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AdminAsideBarComponent } from '../../sharedComponents/admin-aside-bar/admin-aside-bar.component';

import { AddBookComponent } from './components/books/add-book/add-book.component';
import { ListBooksComponent } from './components/books/list-books/list-books.component';
import { UpdateBookComponent } from './components/books/update-book/update-book.component';

import { AddCategoryComponent } from './components/categories/add-category/add-category.component';
import { ListCategoriesComponent } from './components/categories/list-categories/list-categories.component';
import { UpdateCategoryComponent } from './components/categories/update-category/update-category.component';

import { UpdateAuthorComponent } from './components/authors/update-author/update-author.component';
import { ListAuthorsComponent } from './components/authors/list-authors/list-authors.component';
import { AddAuthorComponent } from './components/authors/add-author/add-author.component';




@NgModule({
  declarations: [
    AddBookComponent,
    ListBooksComponent,
    AdminAsideBarComponent,
    UpdateBookComponent,
    AddCategoryComponent,
    ListCategoriesComponent,
    UpdateCategoryComponent,
    UpdateAuthorComponent,
    ListAuthorsComponent,
    AddAuthorComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class AdminModule { }
