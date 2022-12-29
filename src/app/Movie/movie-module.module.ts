import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule,routingComponenet} from '../app-routing.module';
import { AppComponent } from '../app.component';
import { MoviesListeComponent } from '../Movie/movies-liste/movies-liste.component';

import { MovieGenrePipe } from '../Movie/movie-genre.pipe';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DirectiveDirective } from './directive.directive';
import { LoginPageComponent } from '../Movie/login-page/login-page.component';
import { DetailsComponent } from '../Movie/details/details.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieServiceService } from './movie-service.service';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
    {path:'mainpage', component:MoviesListeComponent},
    {path:'detailspage/:id', component:DetailsComponent},
   { path:'loginpage', component:LoginPageComponent},
  ];  

@NgModule({
  declarations: [ 
    routingComponenet,
     DirectiveDirective,
     MovieGenrePipe,
     MovieFormComponent,
     EditMovieComponent,
     ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),

  ],
  providers: [MovieServiceService]
})
export class MovieModuleModule { }
