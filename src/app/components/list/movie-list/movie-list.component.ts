import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {GenresDescriptor} from "../../../types/genres.type";
import {ResponseDescriptor} from "../../../types/search.type";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  displayedColumns = ['title', 'genres', 'releaseDate', 'stats'];
  @Input() public data:ResponseDescriptor = new ResponseDescriptor();
  @Input() public genres: GenresDescriptor = new GenresDescriptor();


  //dataSource = ResponseDescriptor.import(this.data);

  //@ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    //this.dataSource.paginator = this.paginator;
  }
  constructor(
    private router: Router
  ) { }



}
