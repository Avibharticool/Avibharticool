import { TestBed } from '@angular/core/testing';

import { GuardAGuard } from './guard-a.guard';

describe('GuardAGuard', () => {
  let guard: GuardAGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardAGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
