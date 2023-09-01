import { TestBed } from '@angular/core/testing';

import { LillowService } from './lillow.service';

describe('LillowService', () => {
  let service: LillowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LillowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
