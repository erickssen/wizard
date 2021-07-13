import { Component, OnInit, Directive, Input, ContentChildren,  QueryList, AfterContentInit } from '@angular/core';

import { SenderAddressComponent } from './sender-address/sender-address.component';
import { ReciverAddressComponent } from './reciver-address/reciver-address.component';
import { ConfirmComponent } from './confirm/confirm.component';





@Component({
  selector: 'app-wizard-step',
  templateUrl: './wizard-step.component.html',
  styleUrls: ['./wizard-step.component.css']
})
export class WizardStepComponent implements OnInit {




  constructor() { }

  ngOnInit(): void {
  }



}



// ngAfterContentInit(){
//   this.sender.toArray().forEach(item => {console.log('sender id ----->', item.id)}),
//   console.log('reciver-------> ', this.sender.toArray())
// }

// get wizardSteps(): string{
//   //return this.sender ? this.sender.map(s => s.id).join(', '):'',
//          //this.reciver ? this.reciver.map(s => s.id).join(', '):'';
//       return 'hello'
//}
