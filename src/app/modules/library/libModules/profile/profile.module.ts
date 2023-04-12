import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditComponent } from './components/edit/edit.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModuleModule } from 'src/app/modules/shared-module/shared-module.module';
import { UserBooksComponent } from './components/user-books/user-books.component';


@NgModule({
  declarations: [
    EditComponent,
    UserDetailsComponent,
    UserBooksComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    NgxPaginationModule,
    SharedModuleModule,
    NgxPaginationModule
  ]
})
export class ProfileModule { }
