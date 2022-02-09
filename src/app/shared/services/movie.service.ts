import { IMovies } from './../../model/movie';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getPopularFilm(): Observable<IMovies>{
    return this.http.get<IMovies>(environment.apiUrl);

  }
}
