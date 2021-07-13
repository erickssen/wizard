import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShippingLabelMakerComponent  } from './features/shipping-label-maker/shipping-label-maker.component';
import { AuthGards } from './auth/auth.guards';
import { AuthComponent } from './auth/auth.component';

  const routes: Routes = [
    { path:'', redirectTo: 'label', pathMatch:'full'  },
    {
      path:'label',
      component: ShippingLabelMakerComponent,
      canActivate: [AuthGards]
    },
    { path: 'auth', component: AuthComponent },
  ];


  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
