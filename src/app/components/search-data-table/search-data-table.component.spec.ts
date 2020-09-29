import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDataTableComponent } from './search-data-table.component';

describe('SearchDataTableComponent', () => {
  let component: SearchDataTableComponent;
  let fixture: ComponentFixture<SearchDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDataTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
