import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletemoviesComponent } from './deletemovies.component';

describe('DeletemoviesComponent', () => {
  let component: DeletemoviesComponent;
  let fixture: ComponentFixture<DeletemoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletemoviesComponent]
    });
    fixture = TestBed.createComponent(DeletemoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
