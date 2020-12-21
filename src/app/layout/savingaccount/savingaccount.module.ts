import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SavingaccountRoutingModule } from './savingaccount-routing.module';
import { SavingaccountComponent } from './savingaccount.component';
import { CustomersComponent } from './customers/customers.component';
import { DepositmoneyComponent } from './depositmoney/depositmoney.component';
import { WithdrawmoneyComponent } from './withdrawmoney/withdrawmoney.component';
import { AlltransactionComponent } from './alltransaction/alltransaction.component';


@NgModule({
  declarations: [SavingaccountComponent, CustomersComponent, DepositmoneyComponent, WithdrawmoneyComponent, AlltransactionComponent],
  imports: [
    CommonModule,
    FormsModule,
    SavingaccountRoutingModule
  ]
})
export class SavingaccountModule { }
