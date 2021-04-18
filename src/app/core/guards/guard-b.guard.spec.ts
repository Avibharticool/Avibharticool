import { TestBed } from '@angular/core/testing';

import { GuardBGuard } from './guard-b.guard';

describe('GuardBGuard', () => {
  let guard: GuardBGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardBGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
