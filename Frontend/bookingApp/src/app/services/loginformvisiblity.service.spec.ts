import { TestBed } from '@angular/core/testing';

import { LoginformvisiblityService } from './loginformvisiblity.service';

describe('LoginformvisiblityService', () => {
  let service: LoginformvisiblityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginformvisiblityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
