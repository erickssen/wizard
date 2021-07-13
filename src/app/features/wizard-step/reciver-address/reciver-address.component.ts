import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { ShippingInfo } from '../../../shared/shipping-info.model'
import { ShippingLabelService } from '../../../services/shipping-label.service';

@Component({
  selector: 'app-reciver-address',
  templateUrl: './reciver-address.component.html',
  styleUrls: ['./reciver-address.component.css']
})
export class ReciverAddressComponent implements OnInit {

  @Input()contextToObj!: ShippingInfo;
  reciverForm!:FormGroup;

  constructor(private router:Router, private fb: FormBuilder, private shippingLabelService: ShippingLabelService) { }

  ngOnInit(): void {
    this.reciverForm = this.fb.group({
      name: ['',Validators.required],
      street: ['',Validators.required],
      city: ['',Validators.required],
      state: ['',Validators.required],
      zip: ['',Validators.required],
   });
  }


  onClickStep(action:string){
    this.contextToObj.to = this.reciverForm.value;
    this.shippingLabelService.wizardContext = this.contextToObj;
    if(action === 'next'){
      this.router.navigate(['label'], { queryParams: { index: 2, currentStep: 60 }});
    }else{
      this.router.navigate(['label'], {queryParams: {index:0, currentStep: 20 }});
    }
    console.log('context after---------->', this.contextToObj)
    console.log('Service.wizardContext receiver---------->', this.shippingLabelService.wizardContext)
  }

}
