import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesListeComponent } from './movies-liste.component';

describe('MoviesListeComponent', () => {
  let component: MoviesListeComponent;
  let fixture: ComponentFixture<MoviesListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
