import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard, HttpTokenInterceptor, ApiService, JwtService } from './shared';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { FormsModule } from '@angular/forms';
import { NgProgressRouterModule } from 'ngx-progressbar/router';
import { ListborrowersComponent } from './layout/borrowers/listborrowers/listborrowers.component';
import { EmailpanelComponent } from './layout/emailpanel/emailpanel.component';
import { ExportAsModule } from 'ngx-export-as';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ExportAsModule,
        BrowserAnimationsModule,
        
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        ToastrModule.forRoot({
            progressBar: true,
            closeButton: true,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
        ToastContainerModule,
        NgProgressModule,
        NgProgressHttpModule,
        // NgProgressRouterModule
    ],
    declarations: [AppComponent],
    providers: [AuthGuard, { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true }, ApiService, JwtService],
    bootstrap: [AppComponent],
    
})
export class AppModule { }
