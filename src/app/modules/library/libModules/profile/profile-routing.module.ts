import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserBooksComponent } from './components/user-books/user-books.component';

const routes: Routes = [
  { path: '', data: { title: 'User Details' }, component: UserDetailsComponent },
  { path: 'user-books', data: { title: 'User Books' }, component: UserBooksComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
