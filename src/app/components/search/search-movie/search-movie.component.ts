import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from "@angular/material";
import {GenresDescriptor} from "../../../types/genres.type";
import {ResponseDescriptor} from "../../../types/search.type";
import {GenresService} from "../../../services/genres.service";
import {SearchService} from "../../../services/search.service";

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent  implements OnInit {

  public term: string = '';
  public movies: any[];

  public movieSearchData: ResponseDescriptor = new ResponseDescriptor();
  public genres: GenresDescriptor = new GenresDescriptor();

  pageEvent: PageEvent;

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(
    private searchService: SearchService,
    private genresService: GenresService
  ) {
  }

  ngOnInit() {
    this.genresService.getAllMoviesGenres().subscribe(
      (data) => {
        //console.log(data);
        this.genres = data;
      }
    );
    //this.searchMovie('1')
  }


  searchMovie(page: string) {
    //console.log("searching " + page);
    this.searchService.searchMovie(this.term, page).subscribe(
      (data) => {
        //this.onSearch.emit(data);
        this.movieSearchData = data;
      }
    );
  }

  page() {
    //console.log(this.pageEvent.pageIndex.toString())
    let pageNumber = this.pageEvent.pageIndex + 1;
    this.searchMovie(pageNumber.toString());
  }

  searchMovieFirstTime() {
    //this.pageEvent.
    //this.pageEvent.pageIndex
    //this.paginator.pageIndex = 1;
    let pageNumber = 1;
    this.searchMovie(pageNumber.toString());
  }
}

  /*searchActors() {
    this.searchService.searchActors(this.term).subscribe(
      (data)=>{
        this.onSearchAux.emit(data);
      }
    );
  }
}

  searchSeries() {
    this.searchService.searchSeries(this.term).subscribe(
      (data)=>{
        this.onSearchAux.emit(data);
      }
    );
  }

  setupMassEditConfig(){
    this.massEditConfig = {
      accountId: this.accountId,
      deploymentId: this.deploymentId,
      items_count: 0,
      params: this.params
    };
  }

  onSearch(value: string){
    this.params.offset = 0;
    this.params.search = value ? value : undefined;
    this.loadData('all');
  }*/
