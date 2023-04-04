import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent as ListCategories } from './components/categories/list/list.component';

const routes: Routes = [
  {path: 'admin/categories/list', component: ListCategories},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
