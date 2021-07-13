import { Component, OnInit } from '@angular/core';

import { ShippingInfo } from '../../shared/shipping-info.model'
import { ShippingLabelService } from '../../services/shipping-label.service';


@Component({
  selector: 'app-shipping-label-maker',
  templateUrl: './shipping-label-maker.component.html',
  styleUrls: ['./shipping-label-maker.component.css']
})
export class ShippingLabelMakerComponent implements OnInit  {

  shippingInfo!:ShippingInfo;

  wizardContext: ShippingInfo = new ShippingInfo(
    {
      name: '',
      street: '',
      city: '',
      state: '',
      zip: 12345,
    },
    {
      name: '',
      street: '',
      city: '',
      state: '',
      zip: 12345
    },
     {
      weight: 1,
      shippingOption: 1
    }
  )

  constructor(private shippingLabelService:ShippingLabelService){}



  ngOnInit(): void {
    // this.shippingInfo = this.shippingLabelService.wizardContext;
  }

  onAction(): void {
  }

  onConfirm(shippingInfo:ShippingInfo){

      console.log('shippingInfo from wizard component @Output()chld>>>>>>>>>>>>>>', shippingInfo)
  }


}
