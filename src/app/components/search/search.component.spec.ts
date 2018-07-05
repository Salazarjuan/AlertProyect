import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import {combineAll} from "rxjs/operators";
import {componentFactoryName} from "@angular/compiler";

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

/*
describe("WHEN the setupMassEditConfig() is called", ()=>{
  it("SHOULD massEditConfig be setted using the global info ", ()=>{
    component.massEditConfig = null
    component.accountID = "accountID";
    component.deploymentID = "deploymentID";
    component.params = {values:[]};
    component.setupMassEditConfig();
    expect(component.massEditConfig.accountID ).toEqual("acountID");
    expect(component.massEditConfig.deploymentID ).toEqual("deploymentID");
    expect(component.massEditConfig.items_count ).toEqual(0);
    expect(component.massEditConfig.params ).toEqual({values:[]});
  });
});

describe("WHEN the onSearch() is called", ()=>{
  it("SHOULD massEditConfig be setted using the global info ", ()=>{
    //component.massEditConfig = null
    //component.accountID = "accountID";
    spyOn(component, "loadData")
    component.params.search  = "true";
    component.onSearch("true");
    expect(component.params.offset ).toEqual(0);
    expect(component.params.search ).toEqual("true");
    expect(component.loadData).toHaveBeenCalled();
    expect(component.loadData).toHaveBeenCalledWith("all");
  });
});*/

/*
describe("WHEN the onFilter() is called",()=>{
  it("SHOULD offset be 0 and filters be getFiltersParam(filterIds)",()=>{
    component.params.offset = null;
    component.params.filters = null;
    spyOn(component, "loadData");
    spyOn<any>(component['_UtilityServices'], "getFiltersParam").and.returnValue("fakeHttpResponse");
    component.onFilter(["filter 1","filter 2"]);
    expect(component.params.offset).toEqual(0);
    expect(component.params.offset).toBeDefined();
    expect(component.params.filters).toEqual("myFilters");
    expect(component.loadData).toHaveBeenCalledTimes(1);
    expect(component.loadData).toHaveBeenCalledWith("all");
    expect(component['_UtilityServices'].getFiltersParam).toHaveBeenCalledTimes(1)
    expect(component['_UtilityServices'].getFiltersParam).toHaveBeenCalledWith(["filter 1","filter 2"])
  });
});
*/
