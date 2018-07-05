import { Injectable } from '@angular/core';
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {ActorsResponseDescriptor, ResponseDescriptor} from "../types/search.type";

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  constructor(private  http: HttpClient) { }

  /*getPopularActors(page: string){
    return this.http
      .get("https://api.themoviedb.org/3/person/popular?api_key=563a00dc4b4782ad46578874a79c25ac&language=en-US&page="  + page)
      .pipe(
        map(
          (data: any) => {
            return data.results.map((item) => {
              return {
                id: item.id,
                name: item.name,
                profile_path: item.profile_path,
                popularity: item.popularity,
                known_for: item.known_for
              }
            });
          }
        )
      );
  }*/

  getPopularActors(page: string){
    return this.http
      .get("https://api.themoviedb.org/3/person/popular?api_key=563a00dc4b4782ad46578874a79c25ac&language=en-US&page="  + page)
      .pipe(
        map(
          (data: any) => {
            //console.log(data);
            return ActorsResponseDescriptor.import(data);
          }
        )
      );
  }

}
