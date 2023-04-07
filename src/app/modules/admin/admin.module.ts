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



@NgModule({
  declarations: [
    AddBookComponent,
    ListBooksComponent,
    AdminAsideBarComponent,
    UpdateBookComponent 
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
