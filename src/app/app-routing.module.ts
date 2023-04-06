import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminRoutingModule } from './modules/admin/admin-routing.module';
import { AuthRoutingModule } from './modules/auth/auth-routing.module';
import { LibraryRoutingModule } from './modules/library/library-routing.module';

import { NotFoundComponent } from './sharedComponents/not-found/not-found.component';
import { AdminGuard } from './Guard/admin/admin.guard';
import { SectionsComponent } from './modules/library/libModules/sections/sections.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    canActivate: [AdminGuard],
    children: [
      {
        path: 'admin',
        loadChildren: () =>
          import('./modules/admin/admin.module').then((m) => m.AdminModule),
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
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
    // AdminRoutingModule,
    // AuthRoutingModule,
    // LibraryRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
