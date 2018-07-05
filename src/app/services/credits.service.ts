import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CreditsService {

  constructor(private  http:HttpClient) { }

  getCredits (idMovie:number){
    return this.http
      .get('https://api.themoviedb.org/3/movie/' + idMovie + '/credits?api_key=563a00dc4b4782ad46578874a79c25ac')
      .pipe(
        map(
          (data: any) => {
            console.log(data);
            return data.cast.map((item)=>{
              return{
                id: item.id,
                name: item.name,
                character: item.character,
                profile_path: item.profile_path
              }
            });
          }
        )
      );
  }

}
