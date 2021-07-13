import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShippingLabelMakerComponent } from './features/shipping-label-maker/shipping-label-maker.component';
import { ShippingLabelComponent } from './features/shipping-label/shipping-label.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { WizardComponent } from './shared/wizard-component/wizard.component';
import { WizardStepComponent } from './features/wizard-step/wizard-step.component';
import { SenderAddressComponent } from './features/wizard-step/sender-address/sender-address.component';
import { ReciverAddressComponent } from './features/wizard-step/reciver-address/reciver-address.component';
import { WeightComponent } from './features/wizard-step/weight/weight.component';
import { ShippingOptionComponent } from './features/wizard-step/shipping-option/shipping-option.component';
import { ConfirmComponent } from './features/wizard-step/confirm/confirm.component';
import { ShippingComponent } from './features/wizard-step/shipping/shipping.component';

@NgModule({
  declarations: [
    AppComponent,
    ShippingLabelMakerComponent,
    ShippingLabelComponent,
    HeaderComponent,
    WizardComponent,
    WizardStepComponent,
    SenderAddressComponent,
    ReciverAddressComponent,
    WeightComponent,
    ShippingOptionComponent,
    ConfirmComponent,
    ShippingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatRadioModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
