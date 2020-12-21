import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanComponent } from './loan.component';
import { NewloanComponent } from './newloan/newloan.component';
import { ListloanComponent } from './listloan/listloan.component';

const routes: Routes = [
  { path: '', component: LoanComponent },
  { path: 'new',
    data: {
     breadcrumb: 'Loan New'
    },
   component: NewloanComponent },
  { path: 'list',
    data: {
      breadcrumb: 'Loan List'
    },
   component: ListloanComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanRoutingModule { }
