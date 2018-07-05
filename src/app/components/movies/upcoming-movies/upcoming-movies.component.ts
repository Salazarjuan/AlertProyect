import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../../services/movies.service";
import {PageEvent} from "@angular/material";

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.scss']
})
export class UpcomingMoviesComponent implements OnInit {
  public upcomingMovies: any;
  public total_results: any;
  public total_pages: any;

  pageEvent: PageEvent;

  constructor(
    private movieService: MoviesService
  ) { }

  ngOnInit() {
    this.getUpcomingMovies('1');
  }

  page() {
    //console.log(this.pageEvent.pageIndex.toString())
    let pageNumber = this.pageEvent.pageIndex + 1;
    this.getUpcomingMovies(pageNumber.toString());
  }

  getUpcomingMovies(page:string){
    this.movieService.getUpcomingMovies(page).subscribe(
      (data: any) => {
        this.total_results = data.total_results;
        this.total_pages = data.total_pages;
        this.upcomingMovies = data.results.map((item) => {
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
