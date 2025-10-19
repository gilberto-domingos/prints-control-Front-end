import { TestBed } from '@angular/core/testing';

import { Printjob } from './printjob';

describe('Printjob', () => {
  let service: Printjob;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Printjob);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
