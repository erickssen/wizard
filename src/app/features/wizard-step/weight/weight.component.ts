import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { WizardAction } from '../../../shared/wizard-data';
import { WizardData } from '../../../shared/wizard-data';
import { ShippingInfo } from '../../../shared/shipping-info.model'
import { ShippingLabelService } from '../../../services/shipping-label.service';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})
export class WeightComponent implements OnInit {


  @Input()contextWeightObj!: ShippingInfo;

  weightForm!:FormGroup;

  public get Next() {
    return WizardAction.Next;
  }

  public get Prev() {
    return WizardAction.Prev;
  }

  constructor(private router: Router, private fb: FormBuilder, private shippingLabelService: ShippingLabelService) {
      }

  ngOnInit(): void {
      this.weightForm = this.fb.group({
      weight: ['', Validators.required],
      // shippingOption: ['', Validators.required]
    });
  }

  onClickStep(action:string){
    console.log('weight weight weight weight weight', this.weightForm.value)
    this.contextWeightObj.shipping.weight = this.weightForm.value
    if(action === 'next'){
      this.router.navigate(['label'], { queryParams: { index: 3, currentStep: 80 }});
    }else{
      this.router.navigate(['label'], {queryParams: {index:1, currentStep: 40 }});
    }
    this.shippingLabelService.wizardContext = this.contextWeightObj;
    console.log('context = weight @---------->', this.contextWeightObj)
    console.log('Service.wizardContext @---------->', this.shippingLabelService.wizardContext)
  }






}
