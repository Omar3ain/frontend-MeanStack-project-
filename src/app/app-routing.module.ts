import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminRoutingModule } from './modules/admin/admin-routing.module';
import { AuthRoutingModule } from './modules/auth/auth-routing.module';
import { LibraryRoutingModule } from './modules/library/library-routing.module';

import { NotFoundComponent } from './sharedComponents/not-found/not-found.component';
import { AdminGuard } from './Guard/admin/admin.guard';
import { AuthGuard } from './Guard/user/auth.guard';
import { LoginGuard } from './Guard/login/login.guard';


const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
      data: { title: 'Auth' },
      canActivate: [LoginGuard]
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/library/library.module').then((m) => m.LibraryModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
