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
import { NavbarComponent } from './sharedComponents/navbar/navbar.component';
import { HeaderComponent } from './modules/library/libModules/sections/header/header.component';
import { CategoriesComponent } from './modules/library/libModules/sections/categories/categories.component';
import { BooksComponent } from './modules/library/libModules/sections/books/books.component';
import { ExpandedSearchComponent } from './sharedComponents/expanded-search/expanded-search.component';
import { AuthorsSliderComponent } from './modules/library/libModules/sections/authors-slider/authors-slider.component';
import { SectionsComponent } from './modules/library/libModules/sections/sections.component';
// import { ExpandedSearchComponent } from './sharedComponents/expanded-search/expanded-search.component';
import { FooterComponent } from './sharedComponents/footer/footer.component';
import { BookCoverComponent } from './modules/library/libModules/sections/header/book-cover/book-cover.component';
import { AuthService } from './modules/auth/services/auth.service';
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
    SectionsComponent,
    FooterComponent,
    BookCoverComponent
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
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
