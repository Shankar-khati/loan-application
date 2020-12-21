import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BorrowersComponent } from './borrowers.component';
import { AddborrowersComponent } from "./addborrowers/addborrowers.component";
import { ListborrowersComponent } from "./listborrowers/listborrowers.component";
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
   {path: '', component: BorrowersComponent },
   {path: 'new', 
   data: {
    breadcrumb: 'New'
},
   component: AddborrowersComponent },
   {path: 'list',
   data: {
    breadcrumb: 'List'
},
   component: ListborrowersComponent },

   { 
   path: 'edit/:id',
   data: {
    breadcrumb: 'edit'
   },
   component: EditComponent }

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BorrowersRoutingModule { }
