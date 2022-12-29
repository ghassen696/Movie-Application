import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListeComponent } from './Movie/movies-liste/movies-liste.component';
import { DetailsComponent } from './Movie/details/details.component';
import { LoginPageComponent } from './Movie/login-page/login-page.component';
//import { MovieModuleModule } from './Movie/movie-module.module';

const routes: Routes = [
 
    {path:'', redirectTo:'loginpage', pathMatch:'full'}
  ];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponenet =[MoviesListeComponent,DetailsComponent,LoginPageComponent]
