import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageRoutingModule } from './message-routing.module';
import { MessageComponent } from './message.component';
import { NewmessageComponent } from './newmessage/newmessage.component';
import { InboxComponent } from './inbox/inbox.component';
import { OutboxComponent } from './outbox/outbox.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MessageComponent, NewmessageComponent,  InboxComponent, OutboxComponent],
  imports: [
    CommonModule,
    FormsModule,
    MessageRoutingModule
  ]
})
export class MessageModule { }
