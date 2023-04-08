import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileRoutingModule } from './libModules/profile/profile-routing.module';
import { SectionsComponent } from './libModules/sections/sections.component';
import { MainComponent } from './components/main/main.component';
import { ListAuthorsComponent } from './libModules/author/components/list-authors/list-authors.component';
import { BooksComponent as ListBooksComponent } from './components/books/books.component';
import { BookComponent as BookPageComponent } from './components/book/book.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: 'home', component: SectionsComponent },
      { path: 'author', component: ListAuthorsComponent },
      { path: 'author/:id', component: ListAuthorsComponent},
      { path: 'books', component: ListBooksComponent},
      {path: 'books/:id', component: BookPageComponent},
      {
        path: 'profile',
        loadChildren: () => import('./libModules/profile/profile.module').then(m => m.ProfileModule)
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
