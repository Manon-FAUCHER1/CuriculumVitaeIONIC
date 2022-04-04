import { TestBed } from '@angular/core/testing';

import { ApiexperienceService } from './api-experience.service';

describe('ApiexperienceService', () => {
  let service: ApiexperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiexperienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
