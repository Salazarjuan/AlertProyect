import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { ResponseDescriptor } from '../../types/search.type';
import {GenresDescriptor} from "../../types/genres.type";
import {GenresService} from "../../services/genres.service";
import {PageEvent} from "@angular/material";
import { MatPaginator } from '@angular/material';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public term: string = '';
  public movies: any[];

  public data: ResponseDescriptor = new ResponseDescriptor();
  public genres: GenresDescriptor = new GenresDescriptor();

  pageEvent:PageEvent;

  //@Output() onSearch: EventEmitter<ResponseDescriptor> = new EventEmitter();
  //@Output() onSearchAux: EventEmitter<any> = new EventEmitter();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private searchService: SearchService,
    private genresService: GenresService
  ) { }

  ngOnInit() {
    this.genresService.getAllMoviesGenres().subscribe(
      (data) => {
        console.log(data);
        this.genres = data;
      }
    );
  }



  searchMovie(page:string) {
    console.log("searching " + page);
    this.searchService.searchMovie(this.term, page).subscribe(
      (data)=>{
        //this.onSearch.emit(data);
        this.data = data;
      }
    );
  }

  page(){
    //console.log(this.pageEvent.pageIndex.toString())
    let pageNumber = this.pageEvent.pageIndex + 1;
    this.searchMovie(pageNumber.toString());
  }

  searchMovieFirstTime(){
    //this.pageEvent.
    //this.pageEvent.pageIndex
    //this.paginator.pageIndex = 1;
    this.searchMovie('1');
  }

  searchActors(page:string) {
    console.log("searching " + page);
    this.searchService.searchMovie(this.term, page).subscribe(
      (data)=>{
        //this.onSearch.emit(data);
        this.data = data;
      }
    );
  }

  /*searchActors() {
    this.searchService.searchActors(this.term).subscribe(
      (data)=>{
        this.onSearchAux.emit(data);
      }
    );
  }

  searchSeries() {
    this.searchService.searchSeries(this.term).subscribe(
      (data)=>{
        this.onSearchAux.emit(data);
      }
    );
  }*/

}

/*
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


