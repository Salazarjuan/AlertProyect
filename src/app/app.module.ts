import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule, MatChipsModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from "@angular/material";
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatExpansionModule} from '@angular/material/expansion';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';

import { ListComponent } from './components/list/list.component';
import { SearchComponent } from './components/search/search.component';
import { StatsComponent } from './components/stats/stats.component';
import { GenresComponent } from './components/genres/genres.component';
import { TopMoviesComponent } from './components/movies/top-movies/top-movies.component';
import { PopularMoviesComponent } from './components/movies/popular-movies/popular-movies.component';
import { PopularActorsComponent } from './components/actors/popular-actors/popular-actors.component';
import { GendreMoviesComponent } from './components/movies/gendre-movies/gendre-movies.component';
import { MoviesDetailsComponent } from './components/details/movies-details/movies-details.component';
import { ActorsDetailsComponent } from './components/details/actors-details/actors-details.component';
import { SimilarMoviesComponent } from './components/movies/similar-movies/similar-movies.component';
import { CastComponent } from './components/actors/cast/cast.component';
import { SearchMovieComponent } from './components/search/search-movie/search-movie.component';
import { SearchActorComponent } from './components/search/search-actor/search-actor.component';
import { MovieListComponent } from './components/list/movie-list/movie-list.component';
import { ActorListComponent } from './components/list/actor-list/actor-list.component';
import { TvSerieListComponent } from './components/list/tv-serie-list/tv-serie-list.component';
import { SearchTvSerieComponent } from './components/search/search-tv-serie/search-tv-serie.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { UpcomingMoviesComponent } from './components/movies/upcoming-movies/upcoming-movies.component';
import { NowPlayingMoviesComponent } from './components/movies/now-playing-movies/now-playing-movies.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SearchComponent,
    StatsComponent,
    GenresComponent,
    TopMoviesComponent,
    PopularMoviesComponent,
    PopularActorsComponent,
    GendreMoviesComponent,
    MoviesDetailsComponent,
    ActorsDetailsComponent,
    SimilarMoviesComponent,
    CastComponent,
    SearchMovieComponent,
    SearchActorComponent,
    MovieListComponent,
    ActorListComponent,
    TvSerieListComponent,
    SearchTvSerieComponent,
    HomePageComponent,
    UpcomingMoviesComponent,
    NowPlayingMoviesComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatDividerModule,
    MatTabsModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatMenuModule,
    MatChipsModule,
    RouterModule.forRoot([
      {
        path: 'movies/top_movies',
        component: TopMoviesComponent
      },
      {
        path: 'movies/popular_movies',
        component: PopularMoviesComponent
      },
      {
        path: 'actors/popular_actors',
        component: PopularActorsComponent
      },
      {
        path: 'actors/search',
        component: SearchActorComponent
      },
      {
        path: 'movie/search',
        component: SearchMovieComponent
      },
      {
        path: 'detail/movie/:id',
        component: MoviesDetailsComponent
      },
      {
        path: 'detail/actor/:id',
        component: ActorsDetailsComponent
      },
      {
        path: '',
        component: HomePageComponent
      }
    ]),
    MatButtonModule,
    MatCardModule,
    MatListModule,
    HttpClientModule,
    MatGridListModule,
    MatTableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ListComponent, SearchComponent, StatsComponent, GenresComponent, TopMoviesComponent, PopularMoviesComponent, PopularActorsComponent, GendreMoviesComponent, MoviesDetailsComponent, ActorsDetailsComponent, SimilarMoviesComponent, CastComponent, SearchMovieComponent, SearchActorComponent, MovieListComponent, ActorListComponent, TvSerieListComponent, SearchTvSerieComponent, HomePageComponent, UpcomingMoviesComponent, NowPlayingMoviesComponent]
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('search', sanitizer.bypassSecurityTrustResourceUrl('../../../assets/Icons/round-search-24px.svg'));
    iconRegistry.addSvgIcon('tv', sanitizer.bypassSecurityTrustResourceUrl('../../../assets/Icons/round-tv-24px.svg'));
    iconRegistry.addSvgIcon('movie', sanitizer.bypassSecurityTrustResourceUrl('../../../assets/Icons/round-local_movies-24px.svg'));
    iconRegistry.addSvgIcon('people', sanitizer.bypassSecurityTrustResourceUrl('../../../assets/Icons/round-people-24px.svg'));
    iconRegistry.addSvgIcon('favorite', sanitizer.bypassSecurityTrustResourceUrl('../../../assets/Icons/baseline-favorite-24px.svg'));
    iconRegistry.addSvgIcon('home', sanitizer.bypassSecurityTrustResourceUrl('../../../assets/Icons/baseline-home-24px.svg'));
    iconRegistry.addSvgIcon('event', sanitizer.bypassSecurityTrustResourceUrl('../../../assets/Icons/baseline-event-24px.svg'));
  }
}
