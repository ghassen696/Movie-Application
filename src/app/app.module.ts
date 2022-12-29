import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule  } from './app-routing.module';
import { AppComponent } from './app.component';
//import { MoviesListeComponent } from './Movie/movies-liste/movies-liste.component';
//import { MovieGenrePipe } from './Movie/movie-genre.pipe';
import { CarouselModule } from 'ngx-bootstrap/carousel';
//import { DirectiveDirective } from './Movie/directive.directive';
//import { LoginPageComponent } from './Movie/login-page/login-page.component';
import { MovieModuleModule } from './Movie/movie-module.module';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    MovieModuleModule,
    CarouselModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
