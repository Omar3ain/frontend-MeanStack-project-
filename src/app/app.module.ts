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
import { NavbarComponent } from './sharedComponents/navbar/navbar.component';
import { HeaderComponent } from './modules/library/libModules/sections/header/header.component';
import { CategoriesComponent } from './modules/library/libModules/sections/categories/categories.component';
import { BooksComponent } from './modules/library/libModules/sections/books/books.component';
import { ExpandedSearchComponent } from './sharedComponents/expanded-search/expanded-search.component';
import { AuthorsSliderComponent } from './modules/library/libModules/sections/authors-slider/authors-slider.component';
import { SectionsComponent } from './modules/library/libModules/sections/sections.component';
// import { ExpandedSearchComponent } from './sharedComponents/expanded-search/expanded-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NavbarComponent,
    HeaderComponent,
    CategoriesComponent,
    BooksComponent,
    ExpandedSearchComponent,
    AuthorsSliderComponent,
    FooterComponent,
    SectionsComponent,
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
