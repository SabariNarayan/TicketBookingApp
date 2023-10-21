import { TestBed } from '@angular/core/testing';

import { MovieresolverService } from './movieresolver.service';

describe('MovieresolverService', () => {
  let service: MovieresolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieresolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
