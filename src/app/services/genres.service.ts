import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { GenresDescriptor } from '../types/genres.type';

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  private urlAllMovieGenres: string = "https://api.themoviedb.org/3/genre/movie/list?api_key=563a00dc4b4782ad46578874a79c25ac&language=en-US";
  private urlAllTvShowsGenres: string = "https://api.themoviedb.org/3/genre/tv/list?api_key=563a00dc4b4782ad46578874a79c25ac&language=en-US";

  constructor(private http: HttpClient) {  }

  getAllMoviesGenres() {
    return this.http
      .get(this.urlAllMovieGenres)
      .pipe(
        map((data)=>{
          return GenresDescriptor.import(data);
        })
      );
  }

  getAllTvShowsGenres() {
    return this.http
      .get(this.urlAllTvShowsGenres)
      .pipe(
        map((data)=>{
          return GenresDescriptor.import(data);
        })
      );
  }

}
