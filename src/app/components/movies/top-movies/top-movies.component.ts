import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../../services/movies.service";

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.scss']
})
export class TopMoviesComponent implements OnInit {
  topMovies: any;

  constructor(
    private  movieService:MoviesService
  ) { }

  ngOnInit() {
    this.getTopMovies();
  }

  getTopMovies(){
    this.movieService.getTopMovies().subscribe(
      (data: any) => {
        this.topMovies = data.results.map((item) => {
          return {
            id: item.id,
            title: item.title,
            poster_path: item.poster_path,
            popularity: item.popularity,
            vote_average: item.vote_average,
            vote_count: item.vote_count
          }
        });
      },
      (error => {
        console.log(error);
      })
    );
  }

}
