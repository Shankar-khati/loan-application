import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MywalletComponent } from './mywallet.component';

const routes: Routes = [{ path: '', component: MywalletComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MywalletRoutingModule { }
