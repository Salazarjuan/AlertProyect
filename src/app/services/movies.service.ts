import { Injectable } from '@angular/core';
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {ResponseDescriptor} from "../types/search.type";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private  http: HttpClient) { }

  getPopularMovies(page: string){
    return this.http
      .get("https://api.themoviedb.org/3/movie/popular?api_key=563a00dc4b4782ad46578874a79c25ac&language=en-US&page=" + page)
      .pipe(
        map(
          (data: any) => {
            console.log(data);
            return ResponseDescriptor.import(data);
          }
        )
      );
  }

  getTopMovies(){
    return this.http
      .get("https://api.themoviedb.org/3/movie/top_rated?api_key=563a00dc4b4782ad46578874a79c25ac&language=en-US")
      .pipe(
        map(
          (data: any) => {
            //console.log(data);
            return ResponseDescriptor.import(data);
          }
        )
      );
  }

  getSimilarMovies(movieId:number, page: string){
    //https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=977cda5d9bfac0a6b0252ef0272785b6&language=en-US&page=1
    return this.http
      .get("https://api.themoviedb.org/3/movie/" + movieId + "/similar?api_key=977cda5d9bfac0a6b0252ef0272785b6&language=en-US&page=" + page)
      .pipe(
        map(
          (data: any) => {
            //console.log(data);
            return ResponseDescriptor.import(data);
          }
        )
      );
  }

  getUpcomingMovies(page: string){
    //https://api.themoviedb.org/3/movie/now_playing?api_key=563a00dc4b4782ad46578874a79c25ac&language=en-US&page=1
    return this.http
      .get("https://api.themoviedb.org/3/movie/upcoming?api_key=563a00dc4b4782ad46578874a79c25ac&language=en-US&page=" + page)
      .pipe(
        map(
          (data: any) => {
            //console.log(data);
            return ResponseDescriptor.import(data);
          }
        )
      );
  }

  getNowPlayingMovies(page: string){
    //https://api.themoviedb.org/3/movie/now_playing?api_key=563a00dc4b4782ad46578874a79c25ac&language=en-US&page=1
    return this.http
      .get("https://api.themoviedb.org/3/movie/now_playing?api_key=563a00dc4b4782ad46578874a79c25ac&language=en-US&page=" + page)
      .pipe(
        map(
          (data: any) => {
            //console.log(data);
            return ResponseDescriptor.import(data);
          }
        )
      );
  }

}
