import { film } from '../Models/movie';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filmList } from "../mock-movie_list";
import { style } from '@angular/animations';
import{MovieServiceService} from "../movie-service.service"

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  currentMovie: film|undefined
  constructor(private route:ActivatedRoute, private router: Router ,private _movieService: MovieServiceService) { }

  ngOnInit(): void {
    const id:string|null=this.route.snapshot.paramMap.get('id');
    if (id){
        this.currentMovie=this._movieService.getMovieById(+id)
    }
  }
  title="Movie application"
  gotomain(){
    this.router.navigate(['/mainpage'])
  }
  editMovie(id:number|undefined){
    this.router.navigate([`/movie/edit/${id}`])
  }
}
