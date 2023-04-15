import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserBooksComponent } from './components/user-books/user-books.component';

const routes: Routes = [
  { path: '', component: UserDetailsComponent },
  { path: 'user-books', component: UserBooksComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
