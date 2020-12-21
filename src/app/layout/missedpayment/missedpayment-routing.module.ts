import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MissedpaymentComponent } from './missedpayment.component';

const routes: Routes = [{ path: '', component: MissedpaymentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissedpaymentRoutingModule { }
