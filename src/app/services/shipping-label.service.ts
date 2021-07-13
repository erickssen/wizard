import { Injectable } from '@angular/core';


import { ShippingInfo } from '../shared/shipping-info.model'

@Injectable({
  providedIn: 'root'
})
export class ShippingLabelService {

  //keeps the state of the context object as it goes through the steps
  public wizardContext!: ShippingInfo;

  constructor() { }
}
