import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanRoutingModule } from './loan-routing.module';
import { LoanComponent } from './loan.component';
import { NewloanComponent } from './newloan/newloan.component';
import { ListloanComponent } from './listloan/listloan.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoanComponent, NewloanComponent, ListloanComponent],
  imports: [
    CommonModule,
    FormsModule,
    LoanRoutingModule
  ]
})
export class LoanModule { }
