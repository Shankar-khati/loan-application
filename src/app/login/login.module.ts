import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, TranslateModule, LoginRoutingModule, FormsModule,
        ReactiveFormsModule],
    declarations: [LoginComponent]
})
export class LoginModule { }
