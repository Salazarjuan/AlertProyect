import {Component, Input, OnInit} from '@angular/core';
import {CreditsService} from "../../../services/credits.service";

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.scss']
})
export class CastComponent {

  @Input() public idMovie: number;

  cast: any;

  constructor(private credits:CreditsService) { }


  ngOnInit() {
    this.searchCast();
  }

  searchCast(){
    //console.log(this.idMovie);
    this.credits.getCredits(this.idMovie).subscribe(
      (data: any) => {
        this.cast = data;
      },
      (error) => {
        console.log(error);

      }
    );
  }

}
