import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModulepermissionComponent } from './modulepermission.component';
import { AddpermissionComponent } from './addpermission/addpermission.component';
import { PermissionlistComponent } from './permissionlist/permissionlist.component';

const routes: Routes = [
  { path: '', component: ModulepermissionComponent },
  { path: 'add', 
  data: {
    breadcrumb: 'Add Module Permission'
  },
  component: AddpermissionComponent },
  { path: 'list', 
  data: {
    breadcrumb: 'Module Permission List'
  },
  component: PermissionlistComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulepermissionRoutingModule { }
