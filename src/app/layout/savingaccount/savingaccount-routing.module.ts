import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavingaccountComponent } from './savingaccount.component';
import { CustomersComponent } from './customers/customers.component';
import { DepositmoneyComponent } from './depositmoney/depositmoney.component';
import { WithdrawmoneyComponent } from './withdrawmoney/withdrawmoney.component';
import { AlltransactionComponent } from './alltransaction/alltransaction.component';

const routes: Routes = [
  { path: '', component: SavingaccountComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'deposit', component: DepositmoneyComponent },
  { path: 'withdraw', component: WithdrawmoneyComponent },
  { path: 'alltransaction', component: AlltransactionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavingaccountRoutingModule { }
