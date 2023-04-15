import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { AuthGuard } from 'src/app/Guard/user/auth.guard';


const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: '',
      loadChildren: () => import('./libModules/public/public.module').then(m => m.PublicModule)
      },
      {
        path: 'authors',
        loadChildren: () => import('./libModules/author/author.module').then(m => m.AuthorModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'books',
        loadChildren: () => import('./libModules/book/book.module').then(m => m.BookModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'categories',
        loadChildren: () => import('./libModules/category/category.module').then(m => m.CategoryModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'profile',
        loadChildren: () => import('./libModules/profile/profile.module').then(m => m.ProfileModule),
        canActivate: [AuthGuard]
      },
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
