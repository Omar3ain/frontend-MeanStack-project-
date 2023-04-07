import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { BookModule } from './libModules/book/book.module';
import { CategoryModule } from './libModules/category/category.module';
import { ProfileModule } from './libModules/profile/profile.module';
import { AuthorModule } from './libModules/author/author.module';
import { NavbarComponent } from 'src/app/sharedComponents/navbar/navbar.component';
import { HeaderComponent } from './libModules/sections/header/header.component';
import { CategoriesComponent } from './libModules/sections/categories/categories.component';
import { BooksComponent } from './libModules/sections/books/books.component';
import { ExpandedSearchComponent } from 'src/app/sharedComponents/expanded-search/expanded-search.component';
import { AuthorsSliderComponent } from './libModules/sections/authors-slider/authors-slider.component';
import { FooterComponent } from 'src/app/sharedComponents/footer/footer.component';
import { SectionsComponent } from './libModules/sections/sections.component';
import { MainComponent } from './componets/main/main.component';
import { BookCoverComponent } from './libModules/sections/header/book-cover/book-cover.component';



@NgModule({
  declarations: [

    MainComponent,
    FooterComponent,
    NavbarComponent,
    ExpandedSearchComponent,
    AuthorsSliderComponent,
    HeaderComponent,
    CategoriesComponent,
    BooksComponent,
    SectionsComponent,
    BookCoverComponent
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
