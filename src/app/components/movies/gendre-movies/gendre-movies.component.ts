import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../../services/movies.service";

@Component({
  selector: 'app-gendre-movies',
  templateUrl: './gendre-movies.component.html',
  styleUrls: ['./gendre-movies.component.scss']
})
export class GendreMoviesComponent implements OnInit {
  movies: any;

  constructor(private  movie:MoviesService) { }

  ngOnInit() {
    this.searchTopMovies();
  }

  searchPopularMovies(){
    this.movie.getPopularMovies('1').subscribe(
      (data: any) => {
        console.log(data);
        this.movies = data;

      },
      (error => {
        console.log(error);
      })

    );
  }

  searchGendreMovies(){
    this.movie.getPopularMovies('1').subscribe(
      (data: any) => {
        console.log(data);
        this.movies = data;

      },
      (error => {
        console.log(error);
      })

    );
  }

  searchTopMovies(){
    this.movie.getTopMovies().subscribe(
      (data: any) => {
        console.log(data);
        this.movies = data;

      },
      (error => {
        console.log(error);
      })

    );
  }

}
