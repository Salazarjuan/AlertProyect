import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from "@angular/material";
import {ActorsResponseDescriptor} from "../../../types/search.type";
import {SearchService} from "../../../services/search.service";

@Component({
  selector: 'app-search-actor',
  templateUrl: './search-actor.component.html',
  styleUrls: ['./search-actor.component.scss']
})
export class SearchActorComponent implements OnInit {

  public term: string = '';
  public movies: any[];

  public actorSearchData: ActorsResponseDescriptor = new ActorsResponseDescriptor();

  pageEvent: PageEvent;

  //@Output() onSearch: EventEmitter<ResponseDescriptor> = new EventEmitter();
  //@Output() onSearchAux: EventEmitter<any> = new EventEmitter();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private searchService: SearchService
  ) {
  }

  ngOnInit() {
    //this.searchActors('1');
  }

  page() {
    //console.log(this.pageEvent.pageIndex.toString())
    let pageNumber = this.pageEvent.pageIndex + 1;
    this.searchActors(pageNumber.toString());
  }

  searchActors(page: string) {
    //console.log("searching " + page);
    this.searchService.searchActors(this.term, page).subscribe(
      (data) => {
        //this.onSearch.emit(data);
        this.actorSearchData = data;
      }
    );
  }

  searchActorFirstTime() {
    this.searchActors('1');
  }

}
