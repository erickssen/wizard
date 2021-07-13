
// export enum ShippingOption {
//   Ground = 1,
//   Priority = 2,
// }


// export interface From{
//
// name: string,
// street: string,
// city: string,
// state: string,
// zip: string,
// }
//
//
// export interface To {
//
// name: string,
// street: string,
// city: string,
// state: string,
// zip: string,
// }
//
// export interface Shipping{
//
// weight: number;
// shipping: number;
// //shippingOption: number;
// }

export class ShippingInfo {

  public from = {
   name:'',
   street: '',
   city: '',
   state: '',
   zip: 12345
 }

 public to = {
  name: '',
  street: '',
  city: '',
  state: '',
  zip: 12345
}

public shipping = {
  weight: 1,
  shippingOption: 1
}

constructor(
       from: {name: string, street: string, city: string, state: string, zip: number},
       to:{name: string, street: string, city: string, state: string, zip: number},
       shipping:{weight: number, shippingOption: number  }
      )
      {
      this.from = {name: '', street: '', city: '', state: '', zip: 12345};
      this.to = {name: '', street: '', city: '', state: '', zip: 12345};
      this.shipping = {weight: 1, shippingOption:1};
}

//---------------------------------------------------------
  // public shipping = {
  //   weight: 0,
  //   shippingOption: ShippingOption
  // }

  // constructor( from: {name: string, street: string, city: string, state: string, zip: string},
  //              to:{name: string, street: string, city: string, state: string, zip: string},
  //              shipping:{weight: number, shipping: number, priority: number})
               // shipping:{weight: number, shippingOption: ShippingOption})
               // {


              // this.from = from;
              // this.to = to;
              // this.shipping = 1;

              // this.shipping.weight = shipping.weight;
              // this.shipping.shippingOption = ShippingOption;
  // }


}
