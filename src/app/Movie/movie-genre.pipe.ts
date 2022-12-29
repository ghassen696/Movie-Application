import { style } from '@angular/animations';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieGenre'
})
export class MovieGenrePipe implements PipeTransform {

  transform(genre: any, ...args: unknown[]): any {
    if(genre.includes("Action")) {
      return "red";}
    if(genre.includes("Adventure")) {
       return "blue";;}
       if(genre.includes("Comedy")) {
         return "yellow";;}
        if(genre.includes("Thriller")) {
          return "green";;}
          if(genre.includes("History")) {
            return "grey";;}
            if(genre.includes("Fantasy")) {
              return "pink";;}
              if(genre.includes("Horror")) {
                return "purple";;}
                if(genre.includes("Drama")) {
                  return "cyan";;}
            
        return genre
  }
}