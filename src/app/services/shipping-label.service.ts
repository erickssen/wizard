import { Injectable } from '@angular/core';

import { ShippingInfo } from '../shared/shipping-info.model'

@Injectable({
  providedIn: 'root'
})
export class ShippingLabelService {

  public wizardContext!: ShippingInfo;

  constructor() { }
}
