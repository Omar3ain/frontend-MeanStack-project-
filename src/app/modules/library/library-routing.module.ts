import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent as ListAuthorComponent } from './libModules/author/list/list.component';
import { ProfileRoutingModule } from './libModules/profile/profile-routing.module';
import { SectionsComponent } from './libModules/sections/sections.component';
import { AuthGuard } from 'src/app/Guard/user/auth.guard';

const routes: Routes = [
    { path: '', component: SectionsComponent },
    { path: 'author', component: ListAuthorComponent },
    {
      path: 'profile',
      loadChildren: () => import('./libModules/profile/profile.module').then(m => m.ProfileModule),
      // canActivate:[AuthGuard]
    }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ProfileRoutingModule,
  ],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
