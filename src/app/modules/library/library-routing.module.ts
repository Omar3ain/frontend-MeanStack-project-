import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from './library.component';
import { ListComponent } from './libModules/author/list/list.component';

const routes: Routes = [
  { path: '', component: LibraryComponent },
  { path: '/author', component: ListComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
