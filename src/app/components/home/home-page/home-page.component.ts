import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../../services/movies.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
  }

}
