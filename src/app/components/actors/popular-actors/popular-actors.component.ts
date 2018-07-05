import { Component, OnInit } from '@angular/core';
import {ActorsService} from "../../../services/actors.service";
import {PageEvent} from "@angular/material";

@Component({
  selector: 'app-popular-actors',
  templateUrl: './popular-actors.component.html',
  styleUrls: ['./popular-actors.component.scss']
})
export class PopularActorsComponent implements OnInit {

  public popularActors: any;
  public total_results: any;
  public total_pages: any;

  pageEvent: PageEvent;

  constructor(
    private actorsService: ActorsService
  ) { }

  ngOnInit() {
    this.searchPopularActors('1')
  }

  page() {
    //console.log(this.pageEvent.pageIndex.toString())
    let pageNumber = this.pageEvent.pageIndex + 1;
    this.searchPopularActors(pageNumber.toString());
  }

  searchPopularActors(page:string){
    this.actorsService.getPopularActors(page).subscribe(
      (data: any) => {
        this.total_results = data.total_results;
        this.total_pages = data.total_pages;
        this.popularActors = data.results.map((item) => {
          return {
            id: item.id,
            name: item.name,
            profile_path: item.profile_path,
            popularity: item.popularity,
            known_for: item.known_for
          }
        });
      },
      (error => {
        console.log(error);
      })
    );
  }

}
