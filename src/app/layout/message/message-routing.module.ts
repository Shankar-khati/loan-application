import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageComponent } from './message.component';
import { NewmessageComponent } from './newmessage/newmessage.component';
import { OutboxComponent } from './outbox/outbox.component';
import { InboxComponent } from './inbox/inbox.component';

const routes: Routes = [
  { path: '', component: MessageComponent },
  { path: 'new',
  data: {
    breadcrumb: 'Message new'
  },
  component: NewmessageComponent },
  { path: 'outbox',
  data: {
    breadcrumb: 'Message outbox'
  },
  component: OutboxComponent },
  { path: 'inbox',
  data: {
    breadcrumb: 'Message Inbox'
  },
  component: InboxComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageRoutingModule { }
