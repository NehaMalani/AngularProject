import { TestBed } from '@angular/core/testing';

import { DemoInterceptorService } from './demo-interceptor.service';

describe('DemoInterceptorService', () => {
  let service: DemoInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
