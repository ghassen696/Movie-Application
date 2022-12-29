import { Injectable } from '@angular/core';
import { filmList } from './mock-movie_list';
import { film } from './Models/movie';
import { DirectiveDirective } from './directive.directive';
@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  getListMovie():film[]{
    return filmList
  }

  getMovieById(id: number):film|undefined{
    return filmList.find(movie=>movie.Id===id)
  }

  getMovieGenreList():string[] {
    return ["Action", "Adventure", "Fantasy","Horror", "Comedy", "Thriller", "Drama", "History", "Biography"]
  }
}
