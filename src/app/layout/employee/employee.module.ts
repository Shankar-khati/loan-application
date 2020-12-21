import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { NewemployeeComponent } from './newemployee/newemployee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';


@NgModule({
  declarations: [EmployeeComponent, NewemployeeComponent, EmployeelistComponent],
  imports: [
    CommonModule,
    FormsModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
