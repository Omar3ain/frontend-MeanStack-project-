import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { BookModule } from './libModules/book/book.module';
import { CategoryModule } from './libModules/category/category.module';
import { ProfileModule } from './libModules/profile/profile.module';
import { AuthorModule } from './libModules/author/author.module';


@NgModule({
  declarations: [],
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
