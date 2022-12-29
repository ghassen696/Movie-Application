import { film } from './../Models/movie';
import { Component, OnInit, HostListener } from '@angular/core';
import { filmList } from "../mock-movie_list";
import { Router } from '@angular/router';
import{MovieServiceService} from "../movie-service.service"
@Component({
  selector: 'app-movies-liste',
  templateUrl: './movies-liste.component.html',
  styleUrls: ['./movies-liste.component.css']
})
export class MoviesListeComponent implements OnInit {
  title="Movie application"
  movies:undefined|film[];

  constructor(private router:Router, private _movieService: MovieServiceService) { 

  }
 
  ngOnInit(): void {
    this.movies = this._movieService.getListMovie()
  }

  gotoDetail(id:any){
    this.router.navigate([`/detailspage/${id}`])
  }
 
  gotologin(){
    this.router.navigate(['/loginpage'])
  }
}


  