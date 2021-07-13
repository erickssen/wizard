import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { WizardAction } from '../../../shared/wizard-data';
import { WizardData } from '../../../shared/wizard-data';
import { ShippingInfo } from '../../../shared/shipping-info.model'
import { ShippingLabelService } from '../../../services/shipping-label.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {


  @Input()contextShippingtObj!: ShippingInfo;

  shippingForm!:FormGroup;

  public get Next() {
    return WizardAction.Next;
  }

  public get Prev() {
    return WizardAction.Prev;
  }

  constructor(private router: Router, private fb: FormBuilder, private shippingLabelService: ShippingLabelService) {
      }

  ngOnInit(): void {
      this.shippingForm = this.fb.group({
      weight: ['', Validators.required],
      shippingOption: ['', Validators.required]
    });
  }

  onClickStep(action:string){
    this.contextShippingtObj.shipping = this.shippingForm.value
    if(action === 'next'){
      this.router.navigate(['label'], { queryParams: { index: 3, currentStep: 100 }});
    }else{
      this.router.navigate(['label'], {queryParams: {index:1, currentStep: 40 }});
    }
    this.shippingLabelService.wizardContext = this.contextShippingtObj;
  }






}
