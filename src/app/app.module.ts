import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AuthModule } from './modules/auth/auth.module';
import { AdminModule } from './modules/admin/admin.module';
import { AdminGuard } from './Guard/admin/admin.guard';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './sharedComponents/not-found/not-found.component';
import { AuthInterceptor } from './Interceptors/auth/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AdminModule,
    AuthModule,
    RouterModule,
    ToastrModule.forRoot({
    positionClass: 'toast-top-right',
    preventDuplicates: true,
    closeButton: true
  }),
  ],
  providers: [
    AdminGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
