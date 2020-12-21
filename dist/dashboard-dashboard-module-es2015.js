(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/dashboard/components/notification/notification.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/dashboard/components/notification/notification.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-body\">\r\n    <div class=\"list-group\">\r\n        <a class=\"list-group-item clearfix d-block\" href=\"#\">\r\n            <i class=\"fa fa-comment fa-fw\"></i> New Comment\r\n            <span class=\"float-right text-muted small\"><em>4 minutes ago</em></span>\r\n        </a>\r\n        <a class=\"list-group-item clearfix d-block\" href=\"#\">\r\n            <i class=\"fa fa-twitter fa-fw\"></i> 3 New Followers\r\n            <span class=\"float-right text-muted small\"><em>12 minutes ago</em></span>\r\n        </a>\r\n        <a class=\"list-group-item clearfix d-block\" href=\"#\">\r\n            <i class=\"fa fa-envelope fa-fw\"></i> Message Sent\r\n            <span class=\"float-right text-muted small\"><em>27 minutes ago</em></span>\r\n        </a>\r\n        <a class=\"list-group-item clearfix d-block\" href=\"#\">\r\n            <i class=\"fa fa-tasks fa-fw\"></i> New Task\r\n            <span class=\"float-right text-muted small\"><em>43 minutes ago</em></span>\r\n        </a>\r\n        <a class=\"list-group-item clearfix d-block\" href=\"#\">\r\n            <i class=\"fa fa-upload fa-fw\"></i> Server Rebooted\r\n            <span class=\"float-right text-muted small\"><em>11:32 AM</em></span>\r\n        </a>\r\n        <a class=\"list-group-item clearfix d-block\" href=\"#\">\r\n            <i class=\"fa fa-bolt fa-fw\"></i> Server Crashed!\r\n            <span class=\"float-right text-muted small\"><em>11:13 AM</em></span>\r\n        </a>\r\n        <a class=\"list-group-item clearfix d-block\" href=\"#\">\r\n            <i class=\"fa fa-warning fa-fw\"></i> Server Not Responding\r\n            <span class=\"float-right text-muted small\"><em>10:57 AM</em></span>\r\n        </a>\r\n        <a class=\"list-group-item clearfix d-block\" href=\"#\">\r\n            <i class=\"fa fa-shopping-cart fa-fw\"></i> New Order Placed\r\n            <span class=\"float-right text-muted small\"><em>9:49 AM</em></span>\r\n        </a>\r\n        <a class=\"list-group-item clearfix d-block\" href=\"#\">\r\n            <i class=\"fa fa-money fa-fw\"></i> Payment Received\r\n            <span class=\"float-right text-muted small\"><em>Yesterday</em></span>\r\n        </a>\r\n    </div>\r\n    <!-- /.list-group -->\r\n    <a class=\"btn btn-default btn-block\" href=\"#\">View All Alerts</a>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/dashboard/dashboard.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/dashboard/dashboard.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\" [@routerTransition]>\r\n\r\n\r\n    <div class=\"card-body\">\r\n        <!-- <h2 class=\"mb-3\">Dashboard <small>Statistics Overview</small></h2> -->\r\n\r\n        <!-- Begin Page Content -->\r\n        <div class=\"container-fluid\">\r\n\r\n            <!-- Page Heading -->\r\n            <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\r\n                <h1 class=\"h3 mb-0 text-gray-800 page-title\">Dashboard<span>Control Pannel</span></h1>\r\n                <ol class=\"breadcrumb text-xs bg-transparent\">\r\n                    <li><i class=\"fas fa-fw fa-tachometer-alt\"></i><a href=\"#\" class=\"text-gray-700\">Home</a><i class=\"fas fa-fw fa-angle-right\"></i></li>\r\n\r\n                    <li class=\"active text-gray-500\">Dashboard</li>\r\n                </ol>\r\n            </div>\r\n\r\n            <!-- Content Row -->\r\n            <div class=\"row\">\r\n\r\n                <!-- Earnings (Monthly) Card Example -->\r\n                <div class=\"col-xl-3 col-md-6 mb-4\">\r\n                    <div class=\"text-white bg-info card shadow h-100 py-2\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row no-gutters align-items-center\">\r\n                                <div class=\"col mr-2\">\r\n                                    <div class=\"h5 mb-0 font-weight-bold \">$1,025.00</div>\r\n                                    <div class=\"text-xs font-weight-bold text-uppercase mb-1\">My Wallet</div>\r\n                                </div>\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"fas fa-wallet fa-2x \"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <a routerLink=\"/mywallet\" class=\"text-white more-info\">More Info <i class=\"fa fa-arrow-alt-circle-right\"></i></a>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <!-- Earnings (Monthly) Card Example -->\r\n                <div class=\"col-xl-3 col-md-6 mb-4\">\r\n                    <div class=\"card  text-white bg-success shadow h-100 py-2\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row no-gutters align-items-center\">\r\n                                <div class=\"col mr-2\">\r\n                                    <div class=\"h5 mb-0 font-weight-bold\">$500,000.00</div>\r\n                                    <div class=\"text-xs font-weight-bold text-uppercase mb-1\">Loans</div>\r\n                                </div>\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"fas fa-dollar-sign fa-2x \"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <a routerLink=\"/loan/list\" class=\"text-white more-info\">More Info <i class=\"fa fa-arrow-alt-circle-right\"></i></a>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <!-- Earnings (Monthly) Card Example -->\r\n                <div class=\"col-xl-3 col-md-6 mb-4\">\r\n                    <div class=\"card text-white bg-danger shadow h-100 py-2\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row no-gutters align-items-center\">\r\n                                <div class=\"col mr-2\">\r\n                                    <div class=\"h5 mb-0 font-weight-bold\">1</div>\r\n                                    <div class=\"text-xs font-weight-bold text-uppercase mb-1\">Borrowers</div>\r\n                                </div>\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"fas fa-users fa-2x \"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <a routerLink=\"/borrowers/list\" class=\"text-white more-info\">More Info <i class=\"fa fa-arrow-alt-circle-right\"></i></a>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <!-- Pending Requests Card Example -->\r\n                <div class=\"col-xl-3 col-md-6 mb-4\">\r\n                    <div class=\"card text-white bg-warning  shadow h-100 py-2\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row no-gutters align-items-center\">\r\n                                <div class=\"col mr-2\">\r\n                                    <div class=\"h5 mb-0 font-weight-bold\">2</div>\r\n                                    <div class=\"text-xs font-weight-bold text-uppercase mb-1\">Employees</div>\r\n                                </div>\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"fas fa-user fa-2x \"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <a routerLink=\"/employee/list\" class=\"text-white more-info\">More Info <i class=\"fa fa-arrow-alt-circle-right\"></i></a>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n\r\n\r\n                <!-- Earnings (Monthly) Card Example -->\r\n                <div class=\"col-xl-3 col-md-6 mb-4\">\r\n                    <div class=\"text-white bg-success card shadow h-100 py-2\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row no-gutters align-items-center\">\r\n                                <div class=\"col mr-2\">\r\n                                    <div class=\"h5 mb-0 font-weight-bold\">1</div>\r\n                                    <div class=\"text-xs font-weight-bold text-uppercase mb-1\">Company Setup</div>\r\n                                </div>\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"fas fa-cogs fa-2x \"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <a routerLink=\"/loan/list\" class=\"text-white more-info\">More Info <i class=\"fa fa-arrow-alt-circle-right\"></i></a>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <!-- Earnings (Monthly) Card Example -->\r\n                <!-- Earnings (Monthly) Card Example -->\r\n                <div class=\"col-xl-3 col-md-6 mb-4\">\r\n                    <div class=\"text-white bg-info card shadow h-100 py-2\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row no-gutters align-items-center\">\r\n                                <div class=\"col mr-2\">\r\n                                    <div class=\"h5 mb-0 font-weight-bold\">4</div>\r\n                                    <div class=\"text-xs font-weight-bold text-uppercase mb-1\">Messages</div>\r\n                                </div>\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"fas fa-envelope fa-2x \"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <a routerLink=\"/message/inbox\" class=\"text-white more-info\">More Info <i class=\"fa fa-arrow-alt-circle-right\"></i></a>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <!-- Earnings (Monthly) Card Example -->\r\n                <!-- Earnings (Monthly) Card Example -->\r\n                <div class=\"col-xl-3 col-md-6 mb-4\">\r\n                    <div class=\"text-white bg-warning card shadow h-100 py-2\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row no-gutters align-items-center\">\r\n                                <div class=\"col mr-2\">\r\n                                    <div class=\"h5 mb-0 font-weight-bold\">$500,000.00</div>\r\n                                    <div class=\"text-xs font-weight-bold text-uppercase mb-1\">Missed Payment</div>\r\n                                </div>\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"fas fa-dollar-sign fa-2x \"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <a routerLink=\"/payments/list\" class=\"text-white more-info\">More Info <i class=\"fa fa-arrow-alt-circle-right\"></i></a>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <!-- Pending Requests Card Example -->\r\n\r\n                <div class=\"col-xl-3 col-md-6 mb-4\">\r\n                    <div class=\"text-white card bg-danger  shadow h-100 py-2\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row no-gutters align-items-center\">\r\n                                <div class=\"col mr-2\">\r\n                                    <div class=\"h5 mb-0 font-weight-bold\">$3,000,000.00</div>\r\n                                    <div class=\"text-xs font-weight-bold text-uppercase mb-1\">Payment</div>\r\n                                </div>\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"fas fa-dollar-sign fa-2x \"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <a routerLink=\"/payments/list\" class=\"text-white more-info\">More Info <i class=\"fa fa-arrow-alt-circle-right\"></i></a>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <!-- Earnings (Monthly) Card Example -->\r\n                <div class=\"col-xl-3 col-md-6 mb-4\">\r\n                    <div class=\"text-white card bg-info shadow h-100 py-2\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row no-gutters align-items-center\">\r\n                                <div class=\"col mr-2\">\r\n                                    <div class=\"h5 mb-0 font-weight-bold\">$940</div>\r\n                                    <div class=\"text-xs font-weight-bold text-uppercase mb-1\">Total Withdraw</div>\r\n                                </div>\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"fas fa-dollar-sign fa-2x \"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <a routerLink=\"/savingaccount/withdraw\" class=\"text-white more-info\">More Info <i class=\"fa fa-arrow-alt-circle-right\"></i></a>\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- Earnings (Monthly) Card Example -->\r\n                <div class=\"col-xl-3 col-md-6 mb-4\">\r\n                    <div class=\"text-white card bg-danger shadow h-100 py-2\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row no-gutters align-items-center\">\r\n                                <div class=\"col mr-2\">\r\n                                    <div class=\"h5 mb-0 font-weight-bold\">1</div>\r\n                                    <div class=\"text-xs font-weight-bold text-uppercase mb-1\">Customers</div>\r\n                                </div>\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"fas fa-users fa-2x \"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <a routerLink=\"/savingaccount/customers\" class=\"text-white more-info\">More Info <i class=\"fa fa-arrow-alt-circle-right\"></i></a>\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- Earnings (Monthly) Card Example -->\r\n                <div class=\"col-xl-3 col-md-6 mb-4\">\r\n                    <div class=\"text-white card bg-success shadow h-100 py-2\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row no-gutters align-items-center\">\r\n                                <div class=\"col mr-2\">\r\n                                    <div class=\"h5 mb-0 font-weight-bold\">21</div>\r\n                                    <div class=\"text-xs font-weight-bold text-uppercase mb-1\">Total Transaction</div>\r\n                                </div>\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"fas fa-dollar-sign fa-2x \"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <a routerLink=\"/savingaccount/alltransaction\" class=\"text-white more-info\">More Info <i class=\"fa fa-arrow-alt-circle-right\"></i></a>\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- Earnings (Monthly) Card Example -->\r\n                <div class=\"col-xl-3 col-md-6 mb-4\">\r\n                    <div class=\"text-white card bg-warning shadow h-100 py-2\">\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row no-gutters align-items-center\">\r\n                                <div class=\"col mr-2\">\r\n                                    <div class=\"h5 mb-0 font-weight-bold\">$4421.00</div>\r\n                                    <div class=\"text-xs font-weight-bold text-uppercase mb-1\">Total Deposit</div>\r\n                                </div>\r\n                                <div class=\"col-auto\">\r\n                                    <i class=\"fas fa-wallet fa-2x \"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <a routerLink=\"/savingaccount/deposit\" class=\"text-white more-info\">More Info <i class=\"fa fa-arrow-alt-circle-right\"></i></a>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12 col-md-12 mb-4\">\r\n                    <a href=\"#\" class=\"btn btn-primary btn-info text-uppercase btn-block\">Loan Information Chart</a>\r\n                </div>\r\n            </div>\r\n            <!-- Content Row -->\r\n\r\n            <div class=\"row\">\r\n\r\n                <!-- Area Chart -->\r\n                <div class=\"col-xl-8 col-lg-7\">\r\n                    <div class=\"card shadow mb-4\">\r\n                        <!-- Card Header - Dropdown -->\r\n                        <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\r\n                            <h6 class=\"m-0 font-weight-bold text-primary\">Earnings Overview</h6>\r\n                            <div class=\"dropdown no-arrow\">\r\n                                <a class=\"dropdown-toggle\" href=\"#\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                    <i class=\"fas fa-ellipsis-v fa-sm fa-fw text-gray-400\"></i>\r\n                                </a>\r\n                                <div class=\"dropdown-menu dropdown-menu-right shadow animated--fade-in\" aria-labelledby=\"dropdownMenuLink\">\r\n                                    <div class=\"dropdown-header\">Dropdown Header:</div>\r\n                                    <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n                                    <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n                                    <div class=\"dropdown-divider\"></div>\r\n                                    <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- Card Body -->\r\n                        <div class=\"card-body\">\r\n                            <div class=\"chart-area\">\r\n                                <canvas id=\"myAreaChart\"></canvas>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- Pie Chart -->\r\n                <div class=\"col-xl-4 col-lg-5\">\r\n                    <div class=\"card shadow mb-4\">\r\n                        <!-- Card Header - Dropdown -->\r\n                        <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\r\n                            <h6 class=\"m-0 font-weight-bold text-primary\">Revenue Sources</h6>\r\n                            <div class=\"dropdown no-arrow\">\r\n                                <a class=\"dropdown-toggle\" href=\"#\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                    <i class=\"fas fa-ellipsis-v fa-sm fa-fw text-gray-400\"></i>\r\n                                </a>\r\n                                <div class=\"dropdown-menu dropdown-menu-right shadow animated--fade-in\" aria-labelledby=\"dropdownMenuLink\">\r\n                                    <div class=\"dropdown-header\">Dropdown Header:</div>\r\n                                    <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n                                    <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n                                    <div class=\"dropdown-divider\"></div>\r\n                                    <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- Card Body -->\r\n                        <div class=\"card-body\">\r\n                            <div class=\"chart-pie pt-4 pb-2\">\r\n                                <canvas id=\"myPieChart\"></canvas>\r\n                            </div>\r\n                            <div class=\"mt-4 text-center small\">\r\n                                <span class=\"mr-2\">\r\n                        <i class=\"fas fa-circle text-primary\"></i> Direct\r\n                      </span>\r\n                                <span class=\"mr-2\">\r\n                        <i class=\"fas fa-circle text-success\"></i> Social\r\n                      </span>\r\n                                <span class=\"mr-2\">\r\n                        <i class=\"fas fa-circle text-info\"></i> Referral\r\n                      </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Content Row -->\r\n\r\n\r\n        </div>\r\n        <!-- /.container-fluid -->\r\n        <!-- <div class=\"row\">\r\n            <div *ngFor=\"let item of [1,2]\" class=\"col-sm-4 col-lg-3\">\r\n                <div class=\"dash-book text-center\">\r\n                    <h5>Users</h5>\r\n                    <h4>220</h4>\r\n                    <a href=\"#\">View</a>\r\n                </div>\r\n            </div>\r\n       </div> -->\r\n    </div>\r\n\r\n\r\n    <!-- <div class=\"row\">\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n            <app-stat [bgClass]=\"'dark'\" [count]=\"0\" [icon]=\"'fa-comments'\" [label]=\"'New message!'\"></app-stat>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n            <app-stat [bgClass]=\"'dark'\" [count]=\"0\" [icon]=\"'fa-tasks'\" [label]=\"'New task!'\"></app-stat>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n            <app-stat\r\n                [bgClass]=\"'dark'\"\r\n                [count]=\"0\"\r\n                [icon]=\"'fa-shopping-cart'\"\r\n                [label]=\"'New Orders!'\"\r\n            ></app-stat>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n            <app-stat [bgClass]=\"'dark'\" [count]=\"0\" [icon]=\"'fa-support'\" [label]=\"'New Tickets!'\"></app-stat>\r\n        </div>\r\n    </div> -->");

/***/ }),

/***/ "./src/app/layout/dashboard/components/index.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/dashboard/components/index.ts ***!
  \******************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/layout/dashboard/components/notification/notification.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return _notification_notification_component__WEBPACK_IMPORTED_MODULE_0__["NotificationComponent"]; });




/***/ }),

/***/ "./src/app/layout/dashboard/components/notification/notification.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/notification/notification.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9kYXNoYm9hcmQvY29tcG9uZW50cy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/layout/dashboard/components/notification/notification.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/notification/notification.component.ts ***!
  \************************************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let NotificationComponent = class NotificationComponent {
    constructor() { }
    ngOnInit() { }
};
NotificationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notification',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./notification.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/dashboard/components/notification/notification.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./notification.component.scss */ "./src/app/layout/dashboard/components/notification/notification.component.scss")).default]
    })
], NotificationComponent);



/***/ }),

/***/ "./src/app/layout/dashboard/dashboard-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/layout/dashboard/dashboard.component.ts");




const routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DashboardRoutingModule);



/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dash-book {\n  background: #263238;\n  min-height: 260px;\n  padding: 30px 25px 35px 25px;\n  margin: 12px 0px;\n}\n.dash-book h5 {\n  font-size: 24px;\n  color: #fff;\n}\n.dash-book h4 {\n  color: #00d4ca;\n  font-size: 54px;\n  margin: 30px 0;\n}\n.dash-book a {\n  border: 1px solid #2f8233;\n  padding: 5px 10px;\n  color: #ffffff;\n  border-radius: 2px;\n  background: #4caf50;\n  font-weight: 700;\n  font-size: 13px;\n  line-height: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9DOlxcc2hpdmVuZHJhXFxnd2ViXFx3ZWIvc3JjXFxhcHBcXGxheW91dFxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWdCLG1CQUFBO0VBQ1osaUJBQUE7RUFBbUIsNEJBQUE7RUFDbkIsZ0JBQUE7QUNHSjtBREZJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUNJUjtBREZJO0VBQUcsY0FBQTtFQUFnQixlQUFBO0VBQWlCLGNBQUE7QUNPeEM7QUROSTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDUVIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoLWJvb2sgeyAgICBiYWNrZ3JvdW5kOiAjMjYzMjM4O1xyXG4gICAgbWluLWhlaWdodDogMjYwcHg7IHBhZGRpbmc6IDMwcHggMjVweCAzNXB4IDI1cHg7XHJcbiAgICBtYXJnaW46IDEycHggMHB4O1xyXG4gICAgaDUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIGg0e2NvbG9yOiAjMDBkNGNhOyBmb250LXNpemU6IDU0cHg7IG1hcmdpbjozMHB4IDA7fVxyXG4gICAgYSB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzJmODIzMztcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzRjYWY1MDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgIH1cclxufSIsIi5kYXNoLWJvb2sge1xuICBiYWNrZ3JvdW5kOiAjMjYzMjM4O1xuICBtaW4taGVpZ2h0OiAyNjBweDtcbiAgcGFkZGluZzogMzBweCAyNXB4IDM1cHggMjVweDtcbiAgbWFyZ2luOiAxMnB4IDBweDtcbn1cbi5kYXNoLWJvb2sgaDUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmRhc2gtYm9vayBoNCB7XG4gIGNvbG9yOiAjMDBkNGNhO1xuICBmb250LXNpemU6IDU0cHg7XG4gIG1hcmdpbjogMzBweCAwO1xufVxuLmRhc2gtYm9vayBhIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzJmODIzMztcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQ6ICM0Y2FmNTA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.ts ***!
  \*********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");



let DashboardComponent = class DashboardComponent {
    constructor() {
        this.alerts = [];
        this.sliders = [];
        this.sliders.push({
            imagePath: 'assets/images/slider1.jpg',
            label: 'First slide label',
            text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        }, {
            imagePath: 'assets/images/slider2.jpg',
            label: 'Second slide label',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }, {
            imagePath: 'assets/images/slider3.jpg',
            label: 'Third slide label',
            text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
        });
        this.alerts.push({
            id: 1,
            type: 'success',
            message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
        }, {
            id: 2,
            type: 'warning',
            message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
        });
    }
    ngOnInit() { }
    closeAlert(alert) {
        const index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
};
DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/dashboard/dashboard.component.html")).default,
        animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/layout/dashboard/dashboard.component.scss")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.module.ts ***!
  \******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ "./src/app/layout/dashboard/components/index.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/layout/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/layout/dashboard/dashboard.component.ts");








let DashboardModule = class DashboardModule {
};
DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__["DashboardRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["StatModule"]],
        declarations: [
            _dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
            _components__WEBPACK_IMPORTED_MODULE_5__["NotificationComponent"]
        ]
    })
], DashboardModule);



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map