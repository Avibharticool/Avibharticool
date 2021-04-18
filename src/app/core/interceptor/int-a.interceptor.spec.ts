import { TestBed } from '@angular/core/testing';

import { IntAInterceptor } from './int-a.interceptor';

describe('IntAInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      IntAInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: IntAInterceptor = TestBed.inject(IntAInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
