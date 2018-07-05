import {Component, Input, OnInit} from '@angular/core';
import {MoviesService} from "../../../services/movies.service";
import {Router} from "@angular/router";
import {PageEvent} from "@angular/material";

@Component({
  selector: 'app-similar-movies',
  templateUrl: './similar-movies.component.html',
  styleUrls: ['./similar-movies.component.scss']
})
export class SimilarMoviesComponent{

  @Input() public idMovie: number;

  public similarMovies: any;
  public total_results: any;
  public total_pages: any;

  pageEvent: PageEvent;

  constructor(
    private movieService:MoviesService,
    private router: Router
  ) { }


  ngOnInit() {
    this.searchSimilarMovies('1')
  }

  page() {
    //console.log(this.pageEvent.pageIndex.toString())
    let pageNumber = this.pageEvent.pageIndex + 1;
    this.searchSimilarMovies(pageNumber.toString());
  }

  searchSimilarMovies(page:string){
    this.movieService.getSimilarMovies(this.idMovie, page).subscribe(
      (data: any) => {
        this.total_results = data.total_results;
        this.total_pages = data.total_pages;
        this.similarMovies = data.results.map((item) => {
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
