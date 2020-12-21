import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MywalletRoutingModule } from './mywallet-routing.module';
import { MywalletComponent } from './mywallet.component';


@NgModule({
  declarations: [MywalletComponent],
  imports: [
    CommonModule,
    MywalletRoutingModule
  ]
})
export class MywalletModule { }
