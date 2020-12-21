import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentsComponent } from './payments.component';
import {  NewpaymentsComponent } from './newpayments/newpayments.component';
import {  PaymentlistComponent } from './paymentlist/paymentlist.component';

const routes: Routes = [
  { path: '', component: PaymentsComponent },
  { path: 'new',
  data: {
    breadcrumb: 'New Payment'
  },
  component: NewpaymentsComponent },
  { path: 'list',
  data: {
    breadcrumb: 'Payment List'
   },
  component: PaymentlistComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
