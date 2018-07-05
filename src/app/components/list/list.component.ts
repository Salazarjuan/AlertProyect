import {Component, OnInit, Input} from '@angular/core';
import { ResponseDescriptor } from '../../types/search.type';
import { GenresDescriptor } from '../../types/genres.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
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

  onClick(movie) {
    this.router.navigate(['/detail/movie', movie]);
  }



}






