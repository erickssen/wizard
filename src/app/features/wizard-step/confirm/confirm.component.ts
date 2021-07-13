import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { ShippingLabelService } from '../../../services/shipping-label.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ShippingInfo } from '../../../shared/shipping-info.model'

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit, DoCheck {

  @Input()contextConfirmObj!: ShippingInfo;
  shippingCost:number = 0;
  shippingRate:number = 0.14;

  constructor(private shippingLabelService:ShippingLabelService, private activatedRoute: ActivatedRoute, private router:Router) { }

  ngDoCheck(){
    console.log('weight DoChange ++++++++++++++', this.contextConfirmObj.shipping.weight)
    // console.log('weight DoChange ++++++++++++++', this.contextConfirmObj.from.zip)
    //
    // console.log('cost ++++++++++++++', this.shippingCost)
  }

  ngOnInit(): void {
      console.log('weight ++++++++++++++', this.contextConfirmObj.shipping.weight)
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

  confirm(){}

  onClickStep(action:string){

    if(action === 'confirm'){
      this.router.navigate(['label'], { queryParams: { index: 3, currentStep: 100 }});
  }else{
    this.router.navigate(['label'], {queryParams: {index:2, currentStep: 80 }});
  }

  }
}
