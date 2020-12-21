import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailpanelRoutingModule } from './emailpanel-routing.module';
import { EmailpanelComponent } from './emailpanel.component';
import { SendemailComponent } from './sendemail/sendemail.component';
import { ListemailComponent } from './listemail/listemail.component';
import { FormsModule } from '@angular/forms';
import { ExportAsModule } from 'ngx-export-as';


@NgModule({
  declarations: [EmailpanelComponent, SendemailComponent, ListemailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ExportAsModule,
    EmailpanelRoutingModule
  ]
})
export class EmailpanelModule { }
