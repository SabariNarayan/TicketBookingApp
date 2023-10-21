import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTimeRateComponent } from './edit-time-rate.component';

describe('EditTimeRateComponent', () => {
  let component: EditTimeRateComponent;
  let fixture: ComponentFixture<EditTimeRateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditTimeRateComponent]
    });
    fixture = TestBed.createComponent(EditTimeRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
