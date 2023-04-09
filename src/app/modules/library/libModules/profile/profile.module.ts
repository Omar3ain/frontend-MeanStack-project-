import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './components/edit/edit.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModuleModule } from 'src/app/modules/shared-module/shared-module.module';


@NgModule({
  declarations: [
    EditComponent,
    UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    SharedModuleModule
  ]
})
export class ProfileModule { }
