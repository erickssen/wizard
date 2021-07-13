import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShippingLabelMakerComponent  } from './features/shipping-label-maker/shipping-label-maker.component';

  const routes: Routes = [
    {
      path:'label', component: ShippingLabelMakerComponent
    },
    {
      path:'',
      redirectTo: 'label',
      pathMatch:'full'
    }
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
