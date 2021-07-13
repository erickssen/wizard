import { ActivatedRoute } from '@angular/router';
import { Component,
  OnInit,
  Input,
  Output,
  ContentChild,
  ContentChildren,
  QueryList,
  EventEmitter } from '@angular/core';

import { HeaderComponent } from '../header/header.component';
import { WizardStepComponent } from '../../features/wizard-step/wizard-step.component';
import { WizardData } from '../wizard-data';
import { ShippingInfo } from '../shipping-info.model';


@Component({
  selector: 'app-wizard-component',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit, WizardData {

@ContentChild(HeaderComponent) header!: HeaderComponent;
@ContentChildren(WizardStepComponent) steps!: QueryList<WizardStepComponent>;
@Input()context!: ShippingInfo;
@Output() complete = new EventEmitter<ShippingInfo>();

  currentStep!: string;
  step!: number;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['currentStep']) {
        this.currentStep = params['currentStep']

      } else {
        this.currentStep = '20';
        this.step = 0;
      }
      if (params['index']) {
        this.step = params['index']
      } else {
        this.currentStep = '20';
        this.step = 0;
      }
    });
  }

  onAction(){}

  emitContext(ShippingInfo:any){
    if(this.context == ShippingInfo){
      console.log('obj----------------------->>>>>', ShippingInfo)
      this.complete.emit(ShippingInfo)
    }

  }



}
