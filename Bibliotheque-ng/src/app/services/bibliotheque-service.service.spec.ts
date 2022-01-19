import { TestBed } from '@angular/core/testing';

import { BibliothequeServiceService } from './bibliotheque-service.service';

describe('BibliothequeServiceService', () => {
  let service: BibliothequeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BibliothequeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
