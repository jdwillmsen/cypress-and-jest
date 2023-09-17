import { TestBed } from '@angular/core/testing';
import { EarningsService } from './earnings.service';
import { expect } from '@jest/globals';

describe('EarningsService', () => {
  let service: EarningsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EarningsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
