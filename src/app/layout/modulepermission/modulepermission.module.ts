import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModulepermissionRoutingModule } from './modulepermission-routing.module';
import { ModulepermissionComponent } from './modulepermission.component';
import { AddpermissionComponent } from './addpermission/addpermission.component';
import { PermissionlistComponent } from './permissionlist/permissionlist.component';


@NgModule({
  declarations: [ModulepermissionComponent, AddpermissionComponent, PermissionlistComponent],
  imports: [
    CommonModule,
    FormsModule,
    ModulepermissionRoutingModule
  ]
})
export class ModulepermissionModule { }
