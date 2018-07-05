import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ActorsResponseDescriptor, ResponseDescriptor} from "../../../types/search.type";

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss']
})

export class ActorListComponent implements OnInit {
  displayedColumns = ['name'];
  @Input() public data:ActorsResponseDescriptor = new ActorsResponseDescriptor();


  //dataSource = ResponseDescriptor.import(this.data);

  //@ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    //this.dataSource.paginator = this.paginator;
  }
  constructor(
    private router: Router
  ) { }

  onClick(actor) {
    this.router.navigate(['/detail/actor', actor]);
  }



}
