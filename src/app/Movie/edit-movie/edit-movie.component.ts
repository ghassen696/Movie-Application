import { film } from './../Models/movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import{MovieServiceService} from "../movie-service.service"
@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  movie?:film

  constructor(private _router: Router,
    private _route:ActivatedRoute,
    private _movieService: MovieServiceService) { }

  ngOnInit(): void {
    const id:string|null=this._route.snapshot.paramMap.get('id')
    if(id)
      this.movie = this._movieService.getMovieById(+id)
  }

  goBack(){
    if(this.movie)
      this._router.navigate([`movie/${this.movie.Id}`])
  }

}
