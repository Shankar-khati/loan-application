import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServerErrorComponent } from './server-error.component';

const routes: Routes = [
    {
        path: '',
        component: ServerErrorComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ServerErrorRoutingModule {}
