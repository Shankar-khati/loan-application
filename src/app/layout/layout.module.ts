import { CommonModule } from '@angular/common';
import { NgModule, Pipe } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ConfirmationService } from 'primeng/api';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { TimeAgoPipe } from 'time-ago-pipe';
// tslint:disable-next-line: use-pipe-transform-interface
@Pipe({
    name: 'timeAgo',
    pure: false
})
export class TimeAgoExtendsPipe extends TimeAgoPipe { }
@NgModule({
    imports: [CommonModule, LayoutRoutingModule, TranslateModule, NgbDropdownModule, BreadcrumbModule, CKEditorModule],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, BreadcrumbComponent, TimeAgoExtendsPipe]
})
export class LayoutModule { }
