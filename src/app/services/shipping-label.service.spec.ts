import { TestBed } from '@angular/core/testing';

import { ShippingLabelService } from './shipping-label.service';

describe('ShippingLabelService', () => {
  let service: ShippingLabelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShippingLabelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
