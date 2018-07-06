import { Component, OnInit } from '@angular/core';
import {DetailService} from "../../../services/detail.service";
import {MovieDescriptor} from "../../../types/detail.type";
import {ActivatedRoute, Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";


@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent implements OnInit{

  private routerSubscribe: any;
  public movie: MovieDescriptor = new MovieDescriptor();
  public strGenres: string = '';
  public genres: any;
  public strProductionCompanies: string = '';
  public strProductionCountries: string = '';
  public strSpokenLanguages: string = '';
  public idMovie: number

  public backdrop_path: any;

  constructor(
    private route: ActivatedRoute,
    private detailService: DetailService,
    private domSanitizer: DomSanitizer,

  ) { }

  ngOnInit() {
    this.searchDetailsMovies();
  }

  searchDetailsMovies(){
    this.routerSubscribe = this.route.params.subscribe(params => {
      this.idMovie = +params['id'];

      this.detailService.getDetail(this.idMovie).subscribe(
        (data) => {
          this.strProductionCompanies = data.production_companies.map((element)=>{return element.name}).join(', ');
          this.strProductionCountries = data.production_countries.map((element)=>{return element.name}).join(', ');
          this.strSpokenLanguages = data.spoken_languages.map((element)=>{return element.name}).join(', ');
          this.strGenres = data.genres.map((element)=>{return element.name}).join(', ');
          this.genres = data.genres;
          this.movie= data;
          this.idMovie = data.id;

          //console.log(this.movie.backdrop_path);
          if(this.movie.backdrop_path === null){

          }else{
            this.backdrop_path =  this.domSanitizer.bypassSecurityTrustStyle("url('https://image.tmdb.org/t/p/original/" + this.movie.backdrop_path + "')");
          }

        }
      );
      //console.log(this.movie);
    });
  }
}
