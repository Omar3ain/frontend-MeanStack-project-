import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from './library.component';
import { ListComponent as ListAuthorComponent } from './libModules/author/list/list.component';

const routes: Routes = [
  { path: '', component: LibraryComponent },
  { path: 'author', component: ListAuthorComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
