import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsComponent } from './payments.component';
import { NewpaymentsComponent } from './newpayments/newpayments.component';
import { PaymentlistComponent } from './paymentlist/paymentlist.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PaymentsComponent, NewpaymentsComponent, PaymentlistComponent],
  imports: [
    CommonModule,
    FormsModule,
    PaymentsRoutingModule
  ]
})
export class PaymentsModule { }
