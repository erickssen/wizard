import { Component, OnInit } from '@angular/core';

import { ShippingInfo } from '../../shared/shipping-info.model'
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-shipping-label-maker',
  templateUrl: './shipping-label-maker.component.html',
  styleUrls: ['./shipping-label-maker.component.css']
})
export class ShippingLabelMakerComponent implements OnInit  {

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

  constructor(private authService:AuthService){}

  ngOnInit(): void {}

  // console logs the wizardContext object after successfully runing through the wizard
  onComplete(shippingInfo:ShippingInfo){
      this.wizardContext = shippingInfo;
      console.log(this.wizardContext)
  }

  onLogout(){
    this.authService.logout();
  }

}
