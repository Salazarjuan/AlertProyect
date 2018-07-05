import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTvSerieComponent } from './search-tv-serie.component';

describe('SearchTvSerieComponent', () => {
  let component: SearchTvSerieComponent;
  let fixture: ComponentFixture<SearchTvSerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTvSerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTvSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
