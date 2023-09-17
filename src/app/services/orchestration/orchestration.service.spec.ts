import { TestBed } from '@angular/core/testing';
import { OrchestrationService } from './orchestration.service';
import { expect } from '@jest/globals';

describe('OrchestrationService', () => {
  let service: OrchestrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrchestrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
