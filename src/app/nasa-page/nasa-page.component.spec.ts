import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaPageComponent } from './nasa-page.component';

describe('NasaPageComponent', () => {
  let component: NasaPageComponent;
  let fixture: ComponentFixture<NasaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NasaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
