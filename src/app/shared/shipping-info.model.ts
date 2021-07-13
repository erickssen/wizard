
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
}
