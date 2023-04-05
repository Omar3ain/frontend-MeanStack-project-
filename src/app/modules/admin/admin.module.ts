import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ListComponent } from './components/categories/list/list.component';
import { CreateComponent } from './components/categories/create/create.component';
import { HttpClientModule } from '@angular/common/http';

// angular material configuration
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AddBookComponent } from './components/books/add-book/add-book.component';
import { ListBooksComponent } from './components/books/list-books/list-books.component';
import { AdminAsideBarComponent } from '../../sharedComponents/admin-aside-bar/admin-aside-bar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    AddBookComponent,
    ListBooksComponent,
    AdminAsideBarComponent 
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
