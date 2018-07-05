import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GendreMoviesComponent } from './gendre-movies.component';

describe('GendreMoviesComponent', () => {
  let component: GendreMoviesComponent;
  let fixture: ComponentFixture<GendreMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GendreMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GendreMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
