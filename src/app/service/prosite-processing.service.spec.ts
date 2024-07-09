import { TestBed } from '@angular/core/testing';

import { PROSITEProcessingService } from './prosite-processing.service';

describe('PROSITEProcessingService', () => {
  let service: PROSITEProcessingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PROSITEProcessingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
