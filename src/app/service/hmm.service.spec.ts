import { TestBed } from '@angular/core/testing';

import { HmmService } from './hmm.service';

describe('HmmService', () => {
  let service: HmmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HmmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
