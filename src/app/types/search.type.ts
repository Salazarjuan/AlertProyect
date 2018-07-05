import {ProductionCompanyDescriptor, ProductionCountryDescriptor, SpokenLanguageDescriptor} from "./detail.type";
import { GenreDescriptor } from "../types/genres.type";

export class ResponseDescriptor {

  public page: number;
  public pages: number;
  public total_pages: number;
  public total_results: number;
  public results: MovieDescriptor[] = [];

  public static import(rawData: any) {

    let response: ResponseDescriptor = new ResponseDescriptor();

    response.page = rawData.hasOwnProperty('page') ? rawData.page : 0;
    response.pages = rawData.hasOwnProperty('pages') ? rawData.pages : 0;
    response.total_pages = rawData.hasOwnProperty('total_pages') ? rawData.total_pages : 0;
    response.total_results = rawData.hasOwnProperty('total_results') ? rawData.total_results : 0;

    let movie: MovieDescriptor;
    if (rawData.hasOwnProperty("results")) {
      for (var i = 0; i < rawData.results.length; i++) {
        let row: any = rawData.results[i];
        movie = MovieDescriptor.import(row);
        response.results.push(movie);
      }
    }
    return response;
  }
}

export class ActorsResponseDescriptor {

  public page: number;
  public total_pages: number;
  public total_results: number;
  public results: any;

  public static import(rawData: any) {

    let response: ResponseDescriptor = new ResponseDescriptor();

    response.page = rawData.hasOwnProperty('page') ? rawData.page : 0;
    response.total_pages = rawData.hasOwnProperty('total_pages') ? rawData.total_pages : 0;
    response.total_results = rawData.hasOwnProperty('total_results') ? rawData.total_results : 0;

    let Actor: any;
    if (rawData.hasOwnProperty("results")) {
      for (var i = 0; i < rawData.results.length; i++) {
        let row: any = rawData.results[i];
        Actor = ActorDescriptor.import(row);
        response.results.push(Actor);
      }
    }
    return response;
  }
}

export class MovieDescriptor {

  public id: number;
  public genres: GenreDescriptor[] = [];
  public title: string;
  public overview: string;
  public release_date: string;
  public popularity: number;
  public vote_average: number;
  public vote_count: number;
  public backdrop_path: string;
  public poster_path: string;
  public production_companies: ProductionCompanyDescriptor[] = [];
  public production_countries: ProductionCountryDescriptor[] = [];
  public spoken_languages: SpokenLanguageDescriptor[] = [];

  public static import(rawData: any) {
    let movie: MovieDescriptor = new MovieDescriptor();

    movie.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
    movie.title = rawData.hasOwnProperty('title') ? rawData.title: '';
    movie.overview = rawData.hasOwnProperty('overview') ? rawData.overview : '';
    movie.release_date = rawData.hasOwnProperty('release_date') ? rawData.release_date : '---';
    movie.popularity = rawData.hasOwnProperty('popularity') ? rawData.popularity : 0;
    movie.vote_average = rawData.hasOwnProperty('vote_average') ? rawData.vote_average : 0;
    movie.vote_count = rawData.hasOwnProperty('vote_count') ? rawData.vote_count : 0;
    movie.backdrop_path = rawData.hasOwnProperty('backdrop_path') ? rawData.backdrop_path : '';
    movie.poster_path = rawData.hasOwnProperty('poster_path') ? rawData.poster_path : '';

    let genre: GenreDescriptor;
    if (rawData.hasOwnProperty("genres")) {
      for (var i = 0; i < rawData.genres.length; i++) {
        let row: any = rawData.genres[i];
        genre = GenreDescriptor.import(row);
        movie.genres.push(genre);
      }
    }

    let production_company: ProductionCompanyDescriptor;
    if (rawData.hasOwnProperty("production_companies")) {
      for (var i = 0; i < rawData.production_companies.length; i++) {
        let row: any = rawData.production_companies[i];
        production_company = ProductionCompanyDescriptor.import(row);
        movie.production_companies.push(production_company);
      }
    }

    let production_country: ProductionCountryDescriptor;
    if (rawData.hasOwnProperty("production_countries")) {
      for (var i = 0; i < rawData.production_countries.length; i++) {
        let row: any = rawData.production_countries[i];
        production_country = ProductionCountryDescriptor.import(row);
        movie.production_countries.push(production_country);
      }
    }

    let spoken_language: SpokenLanguageDescriptor;
    if (rawData.hasOwnProperty("spoken_languages")) {
      for (var i = 0; i < rawData.spoken_languages.length; i++) {
        let row: any = rawData.spoken_languages[i];
        spoken_language = SpokenLanguageDescriptor.import(row);
        movie.spoken_languages.push(spoken_language);
      }
    }

    return movie;
  }
}


export class ActorDescriptor {

  public id: number;
  public profile_path: string;
  public name: string;
  public know_for: any[];
  public popularity: number;

  public static import(rawData: any) {
    let actor: ActorDescriptor = new ActorDescriptor();

    actor.id = rawData.hasOwnProperty('id') ? rawData.id : 0;
    actor.profile_path = rawData.hasOwnProperty('profile_path') ? rawData.profile_path: '';
    actor.name = rawData.hasOwnProperty('name') ? rawData.name: '';
    actor.know_for = rawData.hasOwnProperty('know_for') ? rawData.know_for : [];
    actor.popularity = rawData.hasOwnProperty('popularity') ? rawData.popularity : 0;


    return actor;
  }
}
