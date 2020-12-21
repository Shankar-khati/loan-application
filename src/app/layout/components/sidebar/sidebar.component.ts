import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ApiService, JwtService } from '../../../shared';
import { ServiceService } from '../service.service';
//import { ModuleService } from '../../modules/service/module.service';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    isActive: boolean;
    collapsed: boolean;
    showMenu: string;
    pushRightClass: string;
    user: any;
    sideBarElement: any = []

    @Output() collapsedEvent = new EventEmitter<boolean>();
    modules: any = [];
    getModule: any;
    departments: any = [];
    constructor(private translate: TranslateService, public router: Router,
        private apiService: ApiService,
        private service: ServiceService,
       // private moduleService: ModuleService,

        private jwtService: JwtService) {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();

            }
        });
        //this.getModules();
    }

    ngOnInit() {
        this.isActive = false;
        this.collapsed = false;
        this.showMenu = '';

        this.pushRightClass = 'push-right';
        this.apiService.getUserData().subscribe(res => {
            this.user = res;
            console.log(this.user)
            let role: string = localStorage.getItem("role");

            if (this.user.name) {
                this.service.getRoleById(this.user.role).subscribe(res2 => {
                    if (res2.data) {
                        this.sideBarElement = [];
                        this.user.name = role;
                       if(role== "Admin"){
                       
                       this.sideBarElement.push(
                            {
                                name: 'Dashboard', 
                                route: 'dashboard', 
                                icon: 'fa-dashboard',
                                nestedMenu: false 
                            },
                            {
                                name: 'Email Panel', route: 'email-panel',
                                icon: 'fas fa-fw fa-book', nestedMenu: true,
                                nestedItems: [{
                                    name: 'Send Mail', route: 'email-panel/send-email',
                                    icon: 'fas fa-fw fa-dot-circle'
                                }, {
                                    name: 'List Mail', route: 'email-panel/list-email',
                                    icon: 'fas fa-fw fa-dot-circle'
                                }]
                            },
                            {
                                name: 'Borrowers', route: 'borrowers',
                                icon: 'fas fa-fw fa-users', nestedMenu: true,
                                nestedItems: [{
                                    name: 'New Borrowers', route: 'borrowers/new',
                                    icon: 'fas fa-fw fa-dot-circle'
                                }, {
                                    name: 'List Borrowers', route: 'borrowers/list',
                                    icon: 'fas fa-fw fa-dot-circle'
                                }]
                            },
                
                            {
                                name: 'My Wallet', route: 'mywallet',
                                icon: 'fas fa-fw fa-book', nestedMenu: false,
                               
                            },
                
                             {
                                name: 'Loans', route: 'loan',
                                icon: 'fas fa-fw fa-dollar-sign', nestedMenu: true,
                                nestedItems: [{
                                    name: 'New Loans', route: 'loan/new',
                                    icon: 'fas fa-fw fa-dot-circle'
                                }, {
                                    name: 'List Loans', route: 'loan/list',
                                    icon: 'fas fa-fw fa-dot-circle'
                                }]
                            },
                            
                            {
                                name: 'Message', route: 'message',
                                icon: 'fas fa-fw fa-book', nestedMenu: true,
                                nestedItems: [{
                                    name: 'New Message', route: 'message/new',
                                    icon: 'fas fa-fw fa-dot-circle'
                                }, {
                                    name: 'Inbox Message', route: 'message/inbox',
                                    icon: 'fas fa-fw fa-dot-circle'
                                },
                                {
                                    name: 'Outbox Message', route: 'message/outbox',
                                    icon: 'fas fa-fw fa-dot-circle'
                                }]
                            },
                
                            {
                                name: 'Missed Payment', route: 'missedpayment',
                                icon: 'fas fa-fw fa-dollar-sign', nestedMenu: false,
                                nestedItems: []
                            },
                            {
                                name: 'Payments', route: 'payments',
                                icon: 'fas fa-fw fa-dollar-sign', nestedMenu: true,
                                nestedItems: [{
                                    name: 'New Payment', route: 'payments/new',
                                    icon: 'fas fa-fw fa-dot-circle'
                                }, {
                                    name: 'Payment List', route: 'payments/list',
                                    icon: 'fas fa-fw fa-dot-circle'
                                }]
                            },
                            {
                                name: 'Employee', route: 'employee',
                                icon: 'fas fa-fw fa-user', nestedMenu: true,
                                nestedItems: [{
                                    name: 'New Employee', route: 'employee/new',
                                    icon: 'fas fa-fw fa-dot-circle'
                                }, {
                                    name: 'Employee List', route: 'employee/list',
                                    icon: 'fas fa-fw fa-dot-circle'
                                }]
                            }, 
                            {
                                name: 'Module Permission', route: 'modulepermission',
                                icon: 'fas fa-fw fa-cogs', nestedMenu: true,
                                nestedItems: [{
                                    name: 'Module Permission List', route: 'modulepermission/list',
                                    icon: 'fas fa-fw fa-dot-circle'
                                }, {
                                    name: 'Add Module Permission', route: 'modulepermission/add',
                                    icon: 'fas fa-fw fa-dot-circle'
                                }]
                            },
                            {
                                name: 'Saving Account', route: 'savingaccount',
                                icon: 'fas fa-fw fa-cogs', nestedMenu: true,
                                nestedItems: [{
                                    name: 'Customers', route: 'savingaccount/customers',
                                    icon: 'fas fa-fw fa-dot-circle'
                                }, {
                                    name: 'Deposit Money', route: 'savingaccount/deposit',
                                    icon: 'fas fa-fw fa-dot-circle'
                                }, {
                                    name: 'Withdraw Money', route: 'savingaccount/withdraw',
                                    icon: 'fas fa-fw fa-dot-circle'
                                },{
                                    name: 'All Transction', route: 'savingaccount/alltransaction',
                                    icon: 'fas fa-fw fa-dot-circle'
                                }]
                            },
                            {
                                name: 'General Settings', route: 'general-settings',
                                icon: 'fas fa-fw fa-cogs', nestedMenu: true,
                                nestedItems: [{
                                    name: 'Module Permission List', route: 'auto-museum/automobiles/list',
                                    icon: 'fas fa-fw fa-dot-circle'
                                }, {
                                    name: 'Add Module Permission', route: 'auto-museum/rooms/list',
                                    icon: 'fas fa-fw fa-dot-circle'
                                }]
                            }
                       );

                       } else if(role=="borrowers"){
                        this.sideBarElement.push(
                            {
                                name: 'Dashboard', 
                                route: 'dashboard', 
                                icon: 'fa-dashboard',
                                nestedMenu: false 
                            }
                        );
                       }else{
                        this.sideBarElement.push(
                            {
                                name: 'Dashboard', 
                                route: 'dashboard', 
                                icon: 'fa-dashboard',
                                nestedMenu: false 
                            },
                            {
                                name: 'Email Panel', route: 'email-panel',
                                icon: 'fas fa-fw fa-book', nestedMenu: true,
                                nestedItems: [{
                                    name: 'Send Mail', route: 'email-panel/send-email',
                                    icon: 'fas fa-fw fa-dot-circle'
                                }, {
                                    name: 'List Mail', route: 'email-panel/list-email',
                                    icon: 'fas fa-fw fa-dot-circle'
                                }]
                            });
                       }

                    }
                    // console.log(this.sideBarElement);
                });
            }
        });
    }

    updateRoute() {
        this.apiService.sendRouteUpdate({});
    }
    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }

    onLoggedout() {
        this.jwtService.logoutUser();
    }
   /* getModules() {
        this.moduleService.getModules({
        }).subscribe(res => {
            if (res['status']
            ) {
                res['data'].result.forEach(element => {
                    if (element.viewType === 'booking') {
                        this.modules.push({
                            name: element.name, route: `booking/${element._id}`,
                            icon: 'fa-shopping-cart'
                        });
                        this.departments.push({
                            name: element.name, route: `departments/${element._id}`,
                            icon: 'fa-shopping-cart'
                        });
                    }
                });
                //   this.modules= res['data'].result;
                // console.log(this.modules);
            }
        });
    }*/
}
