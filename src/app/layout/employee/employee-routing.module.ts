import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './employee.component';
import { NewemployeeComponent } from './newemployee/newemployee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';

const routes: Routes = [
  { path: '', component: EmployeeComponent },
  { path: 'new', 
  data: {
    breadcrumb: 'New Employee'
  },
  component: NewemployeeComponent },
  { path: 'list', 
  data: {
    breadcrumb: 'Employee List'
  },
  component: EmployeelistComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
