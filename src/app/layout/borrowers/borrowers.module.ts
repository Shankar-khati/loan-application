import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { BorrowersRoutingModule } from './borrowers-routing.module';
import { BorrowersComponent } from './borrowers.component';
import { AddborrowersComponent } from './addborrowers/addborrowers.component';
import { ListborrowersComponent } from './listborrowers/listborrowers.component';
import {MatButtonModule} from '@angular/material/button';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [BorrowersComponent, AddborrowersComponent, ListborrowersComponent, EditComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    
    AngularFileUploaderModule,
    BorrowersRoutingModule
  ],
  exports:[MatTabsModule,MatButtonModule]
})
export class BorrowersModule { }
