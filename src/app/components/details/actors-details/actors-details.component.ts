import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {DetailService} from "../../../services/detail.service";
import {ActivatedRoute} from "@angular/router";
import {ActorDescriptor} from "../../../types/detail.type";

@Component({
  selector: 'app-actors-details',
  templateUrl: './actors-details.component.html',
  styleUrls: ['./actors-details.component.scss']
})
export class ActorsDetailsComponent implements OnInit {

  private routerSubscribe: any;
  public idActor: number;
  public actor: ActorDescriptor = new ActorDescriptor();

  constructor(
    private route: ActivatedRoute,
    private detailService: DetailService,
  ) { }

  ngOnInit() {
    this.searchDetailsActors()
  }

  searchDetailsActors(){
    this.routerSubscribe = this.route.params.subscribe(
      params => {
        this.idActor = +params['id'];
        this.detailService.getActorDetail(this.idActor).subscribe(
          (data) => {
            this.actor = data;
          }
        )

      }
    );
  }

}
