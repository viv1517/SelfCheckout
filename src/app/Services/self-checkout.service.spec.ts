import { TestBed } from '@angular/core/testing';

import { SelfCheckoutService } from './self-checkout.service';

describe('SelfCheckoutService', () => {
  let service: SelfCheckoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelfCheckoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
