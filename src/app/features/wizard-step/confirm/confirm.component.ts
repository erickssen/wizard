import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShippingInfo } from '../../../shared/shipping-info.model'
import { ShippingLabelService } from '../../../services/shipping-label.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  @Output()contextInfoEvent = new EventEmitter<ShippingInfo>()
  @Input()contextConfirmObj!: ShippingInfo;
  shippingCost:number = 0;
  shippingRate:number = 0.14;

  constructor( private activatedRoute: ActivatedRoute,
               private router:Router,
               private shippingLabelService: ShippingLabelService) { }

  //calculate the the shipping cost if at last step
  ngOnInit(): void {
      // this.contextConfirmObj = this.shippingLabelService.wizardContext;
      this.activatedRoute.queryParams.subscribe(params => {
      if (params['index'] === '3') {
        this.calculateShippingCost()
      }
    });
  }


calculateShippingCost(){
  let weight = this.contextConfirmObj.shipping.weight
  let shippingOption = this.contextConfirmObj.shipping.shippingOption;
  this.shippingCost = weight * this.shippingRate *
    (shippingOption === 1 ? 1 : 1.5);
  }

  // on confirm emit the context object to the parent wizardComponent
  onConfirm(){
    this.contextInfoEvent.emit(this.shippingLabelService.wizardContext)
  }

  // return to previous step
  onClickStep(action:string){
    if(action === 'prev'){
    this.router.navigate(['label'], {queryParams: {index:2, currentStep: 80 }});
  }

  }
}
