import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        data: {
            breadcrumb: 'Home'
        },
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            {
                path: 'dashboard',
                data: {
                    breadcrumb: 'Dashboard'
                },
                loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
            },
             
            {
                path: 'borrowers',
                loadChildren: () => import('./borrowers/borrowers.module').then((m) => m.BorrowersModule)
            },

            {
                path: 'email-panel',
                loadChildren: () => import('./emailpanel/emailpanel.module').then((m) => m.EmailpanelModule)
            },
            
            {
                path: 'mywallet',
                data: {
                    breadcrumb: 'My Wallet'
                },
                loadChildren: () => import('./mywallet/mywallet.module').then((m) => m.MywalletModule)
            }, 
             {
                path: 'loan',
                loadChildren: () => import('./loan/loan.module').then((m) => m.LoanModule)
            },
             {
                path: 'message',
                loadChildren: () => import('./message/message.module').then((m) => m.MessageModule)
            }, 
            {
                path: 'missedpayment',
                data: {
                    breadcrumb: 'Missed Payment'
                },
                loadChildren: () => import('./missedpayment/missedpayment.module').then((m) => m.MissedpaymentModule)
            },

            {
                path: 'payments',
                loadChildren: () => import('./payments/payments.module').then((m) => m.PaymentsModule)
            },
             {
                path: 'employee',
                loadChildren: () => import('./employee/employee.module').then((m) => m.EmployeeModule)
            },
            
            {
                path: 'modulepermission',
                loadChildren: () => import('./modulepermission/modulepermission.module').then((m) => m.ModulepermissionModule)
            }, 
            
            {
                path: 'savingaccount',
                loadChildren: () => import('./savingaccount/savingaccount.module').then((m) => m.SavingaccountModule)
            },
           
        ]
    },
   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
