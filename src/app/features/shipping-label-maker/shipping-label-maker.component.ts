import { Component, OnInit } from '@angular/core';

import { WizardData } from '../../shared/wizard-data';
import { ShippingInfo } from '../../shared/shipping-info.model'
// import { ShippingOption } from '../../shared/shipping-info.model'
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
    this.shippingInfo = this.shippingLabelService.wizardContext;
    console.log('ShippingLabelMakerComponent shipping info object from service >>>>>>>>>>>>>>>>>> ', this.shippingInfo)
  }

  onAction(): void {
  }


}
