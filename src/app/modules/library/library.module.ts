import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { BookModule } from './libModules/book/book.module';
import { CategoryModule } from './libModules/category/category.module';
import { ProfileModule } from './libModules/profile/profile.module';
import { AuthorModule } from './libModules/author/author.module';
import { LibraryComponent } from './library.component';
import { NavbarComponent } from 'src/app/sharedComponents/navbar/navbar.component';
import { HeaderComponent } from './libModules/header/header.component';
import { CategoriesComponent } from './libModules/sections/categories/categories.component';
import { BooksComponent } from './libModules/sections/books/books.component';
import { ExpandedSearchComponent } from 'src/app/sharedComponents/expanded-search/expanded-search.component';
import { AuthorsSliderComponent } from './libModules/sections/authors-slider/authors-slider.component';


@NgModule({
  declarations: [
    LibraryComponent,
    NavbarComponent,
    HeaderComponent,
    CategoriesComponent,
    BooksComponent,
    ExpandedSearchComponent,
    AuthorsSliderComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    BookModule,
    CategoryModule,
    ProfileModule,
    AuthorModule
    
  ]
})
export class LibraryModule { }
