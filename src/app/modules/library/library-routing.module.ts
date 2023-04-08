import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileRoutingModule } from './libModules/profile/profile-routing.module';
import { SectionsComponent } from './libModules/sections/sections.component';
import { MainComponent } from './componets/main/main.component';
import { ListAuthorsComponent } from './libModules/author/components/list-authors/list-authors.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: '', component: SectionsComponent },
      { path: 'author', component: ListAuthorsComponent },
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
