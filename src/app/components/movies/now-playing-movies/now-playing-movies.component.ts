import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../../services/movies.service";
import {PageEvent} from "@angular/material";

@Component({
  selector: 'app-now-playing-movies',
  templateUrl: './now-playing-movies.component.html',
  styleUrls: ['./now-playing-movies.component.scss']
})
export class NowPlayingMoviesComponent implements OnInit {
  public nowPlayingMovies: any;
  public total_results: any;
  public total_pages: any;

  pageEvent: PageEvent;

  constructor(
    private  movieService:MoviesService
  ) { }

  ngOnInit() {
    this.searchNowPlayingMovies('1');
  }

  page() {
    //console.log(this.pageEvent.pageIndex.toString())
    let pageNumber = this.pageEvent.pageIndex + 1;
    this.searchNowPlayingMovies(pageNumber.toString());
  }

  searchNowPlayingMovies(page:string){
    this.movieService.getNowPlayingMovies(page).subscribe(
      (data: any) => {
        this.total_results = data.total_results;
        this.total_pages = data.total_pages;
        this.nowPlayingMovies = data.results.map((item) => {
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
