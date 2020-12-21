import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MissedpaymentRoutingModule } from './missedpayment-routing.module';
import { MissedpaymentComponent } from './missedpayment.component';


@NgModule({
  declarations: [MissedpaymentComponent],
  imports: [
    CommonModule,
    MissedpaymentRoutingModule
  ]
})
export class MissedpaymentModule { }
