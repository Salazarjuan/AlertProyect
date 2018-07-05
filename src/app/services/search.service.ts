import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { ResponseDescriptor , ActorsResponseDescriptor} from '../types/search.type';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private urlMovies: string = "https://api.themoviedb.org/3/search/movie?api_key=563a00dc4b4782ad46578874a79c25ac&query=";
  private urlActors: string = "https://api.themoviedb.org/3/search/person?api_key=563a00dc4b4782ad46578874a79c25ac&query=";
  private urlSeries: string = "https://api.themoviedb.org/3/search/tv?api_key=563a00dc4b4782ad46578874a79c25ac&query=";
  //https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=563a00dc4b4782ad46578874a79c25ac&language=en-US&page=1
  //https://api.themoviedb.org/3/search/movie?api_key=563a00dc4b4782ad46578874a79c25ac&language=en-US&query=rec&page=1&include_adult=false
  constructor(private http: HttpClient) {  }


  searchMovie(term: string, page: string) {
    return this.http
      .get(this.urlMovies + term + "&page=" + page + "&include_adult=false")
      .pipe(
        map((data)=>{
          //console.log(data);
          return ResponseDescriptor.import(data);
        })
      );
  }

  searchActors(term: string, page: string){
    return this.http
      .get(this.urlActors + term + "&page=" + page + "&include_adult=false")
      .pipe(
        map((data)=>{
          return ActorsResponseDescriptor.import(data);
        })
      );
  }

  searchSeries(term: string){
    return this.http
      .get(this.urlSeries + term)
      .pipe(
        map((data)=>{
          return data;
        })
      );
  }

}
