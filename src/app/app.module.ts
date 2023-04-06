import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './modules/admin/admin.module';
import { AuthModule } from './modules/auth/auth.module';
import { NotFoundComponent } from './sharedComponents/not-found/not-found.component';
import { AuthInterceptor } from './Interceptors/auth/auth.interceptor';
import { RouterModule } from '@angular/router';
import { AdminGuard } from './Guard/admin/admin.guard';
import { FooterComponent } from './sharedComponents/footer/footer.component';
// import { ExpandedSearchComponent } from './sharedComponents/expanded-search/expanded-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AdminModule,
    AuthModule,
    RouterModule
  ],
  providers: [
    AdminGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
