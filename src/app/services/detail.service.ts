import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {ActorDescriptor, MovieDescriptor} from '../types/detail.type';


@Injectable({
  providedIn: 'root'
})
export class DetailService {

  private urlMovie: string = "https://api.themoviedb.org/3/movie/";
  private urlActor: string = "https://api.themoviedb.org/3/person/";
  private key: string = "?api_key=977cda5d9bfac0a6b0252ef0272785b6&language=en-US";

  constructor(private http: HttpClient) {  }

  getDetail(idMovie: number) {
    return this.http
      .get(this.urlMovie + idMovie + this.key)
      .pipe(
        map((data)=>{
          return MovieDescriptor.import(data);
        })
      );
  }

  getActorDetail(idActor: number){
    return this.http
      .get(this.urlActor + idActor + this.key)
      .pipe(
        map((data)=>{
          return ActorDescriptor.import(data);
        })
      );
  }

}
