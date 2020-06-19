import { TestBed } from '@angular/core/testing';

import { EbDataService } from './eb-data.service';

describe('EbDataService', () => {
  let service: EbDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EbDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
