import { TestBed } from '@angular/core/testing';

import { ApiCompetencesService } from './api-competences.service';

describe('ApiCompetencesService', () => {
  let service: ApiCompetencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCompetencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
