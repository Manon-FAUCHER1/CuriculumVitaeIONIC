import { TestBed } from '@angular/core/testing';

import { ApiFormationsService } from './api-formations.service';

describe('ApiFormationsService', () => {
  let service: ApiFormationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiFormationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
