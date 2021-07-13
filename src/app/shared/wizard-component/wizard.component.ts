import { Component, OnInit, Input, Output, OnChanges, AfterContentInit, ContentChild, ContentChildren, QueryList, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeaderComponent } from '../header/header.component'
import { ShippingLabelMakerComponent } from '../../features/shipping-label-maker/shipping-label-maker.component';
import { WizardStepComponent } from '../../features/wizard-step/wizard-step.component';
import { WizardData } from '../wizard-data';
import { ShippingInfo } from '../shipping-info.model'


@Component({
  selector: 'app-wizard-component',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit, AfterContentInit, WizardData, OnChanges  {

@ContentChild(HeaderComponent) header!: HeaderComponent;
@ContentChildren(WizardStepComponent) steps!: QueryList<WizardStepComponent>;
@Input()context!: ShippingInfo;
@Output() complete!: EventEmitter<ShippingInfo>

  currentStep!: string;
  step!: number;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnChanges(){
    console.log('wizardContext------------>', this.context)
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['currentStep']) {
        this.currentStep = params['currentStep']
      } else {
        // reset both bar and tabs
        this.currentStep = '20';
        this.step = 0;
      }
      if (params['index']) {
        this.step = params['index']
      } else {
        // reset both bar and tabs
        this.currentStep = '20';
        this.step = 0;
      }
    });
  }

  onAction(){
    // take action prev, next, end
  }

  ngAfterContentInit(){
      console.log('steps------------>', this.steps)
  }

}
