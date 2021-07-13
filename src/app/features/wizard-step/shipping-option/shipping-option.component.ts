import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

import { WizardAction } from '../../../shared/wizard-data';
import { WizardData } from '../../../shared/wizard-data';
import { ShippingInfo } from '../../../shared/shipping-info.model'
import { ShippingLabelService } from '../../../services/shipping-label.service';

@Component({
  selector: 'app-shipping-option',
  templateUrl: './shipping-option.component.html',
  styleUrls: ['./shipping-option.component.css']
})
export class ShippingOptionComponent implements OnInit {

  @Input()contextOptionObj!: ShippingInfo;

  shippingOptionForm!:FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private shippingLabelService: ShippingLabelService) {
      }


  ngOnInit(): void {
      this.shippingOptionForm = this.fb.group({

        shippingOption: ['', Validators.required],
    });
  }

  public get Next() {
    return WizardAction.Next;
  }

  public get Prev() {
    return WizardAction.Prev;
  }

  onClickStep(action:string){
    this.contextOptionObj.shipping.shippingOption = this.shippingOptionForm.value
    if(action === 'next'){
      this.router.navigate(['label'], { queryParams: { index: 4, currentStep: 100 }});
    }else{
      this.router.navigate(['label'], {queryParams: {index:2, currentStep: 80 }});
    }
    this.shippingLabelService.wizardContext = this.contextOptionObj;
    console.log('context = shippingOptionForm---------->', this.contextOptionObj)
    console.log('Service.wizardContext---------->', this.shippingLabelService.wizardContext)
  }


}
