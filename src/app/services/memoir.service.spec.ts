import { TestBed } from '@angular/core/testing';

import { MemoirService } from './memoir.service';

describe('MemoirService', () => {
  let service: MemoirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemoirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
