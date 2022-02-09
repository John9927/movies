import { MovieService } from './../../shared/services/movie.service';
import { IMovies, IResult } from './../../model/movie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  popularMovies: IResult[] = [];

  constructor(public movieService: MovieService) {
    this.movieService.getPopularFilm().subscribe( data => this.popularMovies = data.results)
   }

  ngOnInit(): void {
  }

}
