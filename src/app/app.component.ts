import {Component, OnInit} from '@angular/core';
import {DetailService} from "./services/detail.service";
import {MovieDescriptor} from "./types/detail.type";
import {ActivatedRoute} from "@angular/router";
import {GenresService} from "./services/genres.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {

  private routerSubscribe: any;

  public genresMovieList: any;
  public genresTvList: any;

  constructor(
    private route: ActivatedRoute,
    private genresService: GenresService
  ) { }

  ngOnInit() {
    this.routerSubscribe = this.route.params.subscribe(params => {
      this.genresService.getAllMoviesGenres().subscribe(
        (data) => {
          this.genresMovieList = data.genres;
        }
      );
      this.genresService.getAllTvShowsGenres().subscribe(
        (data) => {
          this.genresTvList = data.genres;
        }
      );
    });
  }
}
