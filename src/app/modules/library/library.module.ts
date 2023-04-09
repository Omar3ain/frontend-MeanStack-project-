import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';


import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './libModules/public/components/header/header.component';
import { ExpandedSearchComponent } from './components/expanded-search/expanded-search.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthorsSliderComponent } from './components/authors-slider/authors-slider.component';



@NgModule({
  declarations: [
    MainComponent,
    ExpandedSearchComponent,
    FooterComponent,
    NavbarComponent,
    AuthorsSliderComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
  ]
})
export class LibraryModule { }
