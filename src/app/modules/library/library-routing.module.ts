import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent as ListAuthorComponent } from './libModules/author/list/list.component';
import { ProfileRoutingModule } from './libModules/profile/profile-routing.module';
import { SectionsComponent } from './libModules/sections/sections.component';

const routes: Routes = [
  { path: 'home', component: SectionsComponent },
  { path: 'author', component: ListAuthorComponent },
  {
    path: 'profile',
    loadChildren: () => import('./libModules/profile/profile.module').then(m => m.ProfileModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ProfileRoutingModule
  ],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
