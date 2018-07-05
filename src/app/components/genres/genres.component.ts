import { Component, OnInit, Input } from '@angular/core';
import { GenresDescriptor, GenreDescriptor } from '../../types/genres.type';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  @Input() public genres: GenresDescriptor = new GenresDescriptor();
  @Input() public genreIds: number[] = [];

  public genresToShow: GenreDescriptor[] = [];

  constructor() { }

  ngOnInit() {
    this.toShow();
  }

  toShow() {
    this.genreIds.forEach((item)=>{
      this.genresToShow = this.genresToShow.concat(this.genres.genres.filter((element)=>{
        return (item === element.id);
      }));
    });
  }

}
