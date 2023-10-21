import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmoviesComponent } from './editmovies.component';

describe('EditmoviesComponent', () => {
  let component: EditmoviesComponent;
  let fixture: ComponentFixture<EditmoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditmoviesComponent]
    });
    fixture = TestBed.createComponent(EditmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
