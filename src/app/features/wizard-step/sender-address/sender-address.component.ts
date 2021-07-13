import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

import { WizardAction } from '../../../shared/wizard-data';
import { WizardData } from '../../../shared/wizard-data';
import { ShippingInfo } from '../../../shared/shipping-info.model'
import { ShippingLabelService } from '../../../services/shipping-label.service';

@Component({
  selector: 'app-sender-address',
  templateUrl: './sender-address.component.html',
  styleUrls: ['./sender-address.component.css']
})
export class SenderAddressComponent implements OnInit  {


  @Input()contextFromObj!: ShippingInfo;

  senderForm!:FormGroup;

  public get Next() {
    return WizardAction.Next;
  }

  public get Prev() {
    return WizardAction.Prev;
  }

  constructor(private router: Router, private fb: FormBuilder, private shippingLabelService: ShippingLabelService) {
      }

  ngOnInit(): void {
    this.senderForm = this.fb.group({
      name: ['',Validators.required],
      street: ['',Validators.required],
      city: ['',Validators.required],
      state: ['',Validators.required],
      zip: ['',Validators.required],
  });
  }



  onClickStep(action:string){
    this.contextFromObj.from = this.senderForm.value
    if(action === 'next'){
      this.router.navigate(['label'], { queryParams: { index: 1, currentStep: 40 }});
    }
    this.shippingLabelService.wizardContext = this.contextFromObj;
    console.log('context = Form---------->', this.contextFromObj)
    console.log('Service.wizardContext---------->', this.shippingLabelService.wizardContext)
  }






}
