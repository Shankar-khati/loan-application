import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailpanelComponent } from './emailpanel.component';
import { SendemailComponent } from "./sendemail/sendemail.component";
import { ListemailComponent } from "./listemail/listemail.component";

const routes: Routes = [
  { path: '', component: EmailpanelComponent },
  { path: 'send-email',
  data: {
    breadcrumb: 'Send Email'
   },
  component: SendemailComponent },
  { path: 'list-email', 
  data: {
    breadcrumb: 'Email List'
  },
  component: ListemailComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailpanelRoutingModule { }
