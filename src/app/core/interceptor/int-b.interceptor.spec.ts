import { TestBed } from '@angular/core/testing';

import { IntBInterceptor } from './int-b.interceptor';

describe('IntBInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      IntBInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: IntBInterceptor = TestBed.inject(IntBInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
