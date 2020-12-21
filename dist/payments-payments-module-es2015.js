(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payments-payments-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/payments/newpayments/newpayments.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/payments/newpayments/newpayments.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <div class=\"card-body\">\n\n        <!-- Begin Page Content -->\n        <div class=\"container-fluid\">\n\n            <!-- Page Heading -->\n            <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\n                <h1 class=\"h3 mb-0 text-gray-800 page-title\">New Payments<span>Control Pannel</span></h1>\n                <ol class=\"breadcrumb text-xs bg-transparent\">\n                    <li><i class=\"fas fa-fw fa-tachometer-alt\"></i><a href=\"#\" class=\"text-gray-700\">Home</a><i class=\"fas fa-fw fa-angle-right\"></i></li>\n                    <li><a href=\"#\" class=\"text-gray-700\">Payment</a><i class=\"fas fa-fw fa-angle-right\"></i></li>\n                    <li class=\"active text-gray-500\">Add</li>\n                </ol>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-lg-12 mb-4\">\n\n                    <!-- Project Card Example -->\n                    <div class=\"card shadow mb-4\">\n                        <div class=\"card-header py-3\">\n\n                        </div>\n                        <div class=\"card-body\">\n                            <form class=\"user\">\n\n\n\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Account#</label></div>\n                                        <div class=\"col-lg-10\">\n                                            <input type=\"text\" name=\"Account\" [(ngModel)]=\"Account\" placeholder=\"Account\" class=\"form-control form-control-user\" />\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group mt-4\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Customer</label></div>\n                                        <div class=\"col-lg-10 \">\n                                            <select class=\"form-control form-control-user\" name=\"Customer\" [(ngModel)]=\"Customer\" (change)=\"getCustomer($event.target.value)\">\n                                      <option *ngFor=\"let ln of Customers\" [value]=\"ln.id\">{{ln.name}}</option>\n                                  </select>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Customer Account#</label></div>\n                                        <div class=\"col-lg-10 \">\n                                            <select class=\"form-control form-control-user\" name=\"CustomerAccount\" [(ngModel)]=\"CustomerAccount\" (change)=\"getCustomerAccount($event.target.value)\">\n                                      <option *ngFor=\"let ln of CustomerAccounts\" [value]=\"ln.id\">{{ln.account}}</option>\n                                      \n                                  </select>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Loan</label></div>\n                                        <div class=\"col-lg-10 \">\n                                            <select class=\"form-control form-control-user\" name=\"Loan\" [(ngModel)]=\"Loan\" (change)=\"getLoan($event.target.value)\">\n                                      <option *ngFor=\"let ln of  Loans\" [value]=\"ln.id\">{{ln.number}}</option>\n                                      \n                                  </select>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Payment Date</label></div>\n                                        <div class=\"col-lg-10\">\n                                            <div class=\"input-group\">\n                                                <div class=\"input-group-prepend\">\n                                                    <span class=\"input-group-text\" for=\"example\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></span>\n                                                </div>\n                                                <input placeholder=\"dd-mm-yyyy\" name=\"PaymentDate\" [(ngModel)]=\"PaymentDate\" type=\"text\" id=\"example\" class=\"form-control\" />\n\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Amount to Pay</label></div>\n                                        <div class=\"col-lg-10\">\n                                            <input type=\"text\" name=\"AmounttoPay\" [(ngModel)]=\"AmounttoPay\" placeholder=\"Amount to Pay\" class=\"form-control form-control-user\" />\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Teller By</label></div>\n                                        <div class=\"col-lg-10\">\n                                            <input type=\"text\" name=\"TellerBy\" [(ngModel)]=\"TellerBy\" class=\"form-control form-control-user\" value=\"admin\" />\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Remarks</label></div>\n                                        <div class=\"col-lg-10\">\n                                            <textarea class=\"form-control\" name=\"Remarks\" [(ngModel)]=\"Remarks\" style=\"height: 100px;\"></textarea>\n                                        </div>\n                                    </div>\n                                </div>\n\n\n                                <hr class=\"mp-4 mt-4\" />\n                                <div class=\"row\">\n                                    <div class=\"col-lg-12 text-right\">\n                                        <button type=\"button\" (click)=\"onReset()\" class=\"btn btn-info btn-sm\"><i class=\"fa fa-times pr-2\" aria-hidden=\"true\"></i>Reset</button>\n                                        <button type=\"button\" (click)=\"MakePayment()\" class=\"btn btn-success btn-sm\"><i class=\"fa fa-save pr-2\" aria-hidden=\"true\"></i>Make Payment</button>\n                                    </div>\n                                </div>\n\n                            </form>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n\n\n\n\n\n        </div>\n        <!-- /.container-fluid -->\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/payments/paymentlist/paymentlist.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/payments/paymentlist/paymentlist.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <div class=\"card-body\">\n\n        <!-- Begin Page Content -->\n        <div class=\"container-fluid\">\n\n            <!-- Page Heading -->\n            <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\n                <h1 class=\"h3 mb-0 text-gray-800 page-title\">List of Payments<span>Control Pannel</span></h1>\n                <ol class=\"breadcrumb text-xs bg-transparent\">\n                    <li><i class=\"fas fa-fw fa-tachometer-alt\"></i><a href=\"#\" class=\"text-gray-700\">Home</a><i class=\"fas fa-fw fa-angle-right\"></i></li>\n                    <li><a href=\"#\" class=\"text-gray-700\">Payment</a><i class=\"fas fa-fw fa-angle-right\"></i></li>\n                    <li class=\"active text-gray-500\">List</li>\n                </ol>\n            </div>\n\n\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <!-- DataTales Example -->\n                    <div class=\"bg-white shadow border-top-green mb-4\">\n\n\n\n\n                        <div class=\"card-body\">\n                            <div class=\"mb-2\">\n                                <button type=\"button\" class=\"btn btn-warning btn-sm\" routerLink=\"/dashboard\"><i class=\"fa fa-reply-all pr-2\" aria-hidden=\"true\"></i>Back</button>\n                                <button type=\"button\" class=\"btn btn-danger btn-sm\"><i class=\"fa fa-times pr-2\" aria-hidden=\"true\"></i>Delete</button>\n                                <button type=\"button\" class=\"btn btn-info btn-sm\" routerLink=\"/payments/new\"><i class=\"fa fa-dollar-sign pr-2\" aria-hidden=\"true\"></i>New Payment</button>\n                                <button type=\"button\" class=\"btn btn-primary btn-sm\"><i class=\"fa fa-print pr-2\" aria-hidden=\"true\"></i>Print Payments</button>\n\n                                <button type=\"button\" class=\"btn btn-success btn-sm \"><i class=\"fa fa-paper-plane pr-2\" aria-hidden=\"true\"></i>Export Excel</button>\n\n                            </div>\n                            <hr class=\"mp-4 mt-4\">\n                            <div class=\"table-responsive mt-4\">\n                                <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\n                                    <thead>\n                                        <tr>\n                                            <th><input type=\"checkbox\" name=\"\"></th>\n                                            <th>Id</th>\n                                            <th>Customer</th>\n                                            <th>Loan</th>\n                                            <th>Balance</th>\n                                            <th>Amount to Pay</th>\n                                            <th>Date</th>\n                                            <th>Teller</th>\n                                            <th>Actions</th>\n                                        </tr>\n                                    </thead>\n                                    <!-- <tfoot>\n                      <tr>\n                        <th><input type=\"checkbox\" name=\"\"></th>\n                        <th>Id</th>\n                        <th>Image</th>\n                        <th>First Name</th>\n                        <th>Last Name</th>\n                        <th>Email</th>\n                        <th>Mobile Number</th>\n                        <th>Status</th>\n                        <th>Action</th>\n                      </tr>\n                    </tfoot> -->\n                                    <tbody>\n                                        <tr *ngFor=\"let newdata of Paymentdata\">\n                                            <td><input type=\"checkbox\" #myItem (change)=\"OnCheckboxSelect(newdata, $event)\" name=\"item-{{newdata.id}}\"></td>\n                                            <th>{{newdata._id}}</th>\n                                            <td>{{newdata.Customer}}</td>\n                                            <td>{{newdata.Loan}}</td>\n                                            <td>{{newdata.Balance}}</td>\n                                            <td>{{newdata.AmounttoPay}}</td>\n                                            <td>{{newdata.date}}</td>\n                                            <td>{{newdata.Teller}}</td>\n                                            <td><button type=\"button\" class=\"btn btn-info btn-sm\"><i class=\"fa fa-eye \" aria-hidden=\"true\"></i>\n                                                {{newdata.Actions}}</button></td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <!-- DataTales Example -->\n                    <div class=\"bg-white shadow  border-top-info mb-4\">\n                        <div class=\"col-lg-12\">\n                            <button class=\"btn btn-primary btn-info text-uppercase btn-block mt-3\">Number of Loan Aplicants 1</button>\n                        </div>\n                        <!-- Pie Chart -->\n                        <div class=\"col-xl-12 col-lg-12 mt-4\">\n                            <div class=\"card shadow mb-4\">\n                                <!-- Card Header - Dropdown -->\n\n                                <!-- Card Body -->\n                                <div class=\"card-body\">\n                                    <div class=\"chart-pie pt-4 pb-2\">\n                                        <canvas id=\"myPieChart\"></canvas>\n                                    </div>\n                                    <div class=\"mt-4 text-center small\">\n                                        <span class=\"mr-2\">\n                        <i class=\"fas fa-circle text-primary\"></i> Direct\n                      </span>\n                                        <span class=\"mr-2\">\n                        <i class=\"fas fa-circle text-success\"></i> Social\n                      </span>\n                                        <span class=\"mr-2\">\n                        <i class=\"fas fa-circle text-info\"></i> Referral\n                      </span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n\n\n\n\n\n            </div>\n            <!-- /.container-fluid -->\n\n        </div>\n        <!-- End of Main Content -->\n\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/payments/payments.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/payments/payments.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>payments works!</p>\n");

/***/ }),

/***/ "./src/app/layout/payments/newpayments/newpayments.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/layout/payments/newpayments/newpayments.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wYXltZW50cy9uZXdwYXltZW50cy9uZXdwYXltZW50cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/layout/payments/newpayments/newpayments.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/payments/newpayments/newpayments.component.ts ***!
  \**********************************************************************/
/*! exports provided: NewpaymentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewpaymentsComponent", function() { return NewpaymentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _payment_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../payment-service.service */ "./src/app/layout/payments/payment-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");





let NewpaymentsComponent = class NewpaymentsComponent {
    constructor(service, router, route, tost) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.tost = tost;
        this.date = " ";
        this.Teller = " ";
        this.Customers = [
            { 'id': '1', 'name': "ravi" },
            { 'id': '2', 'name': "reema" },
            { 'id': '3', 'name': "rupa" },
            { 'id': '4', 'name': "rani" }
        ];
        this.CustomerAccounts = [
            { 'id': '1', 'account': "445555" },
            { 'id': '2', 'account': "333333" },
            { 'id': '3', 'account': "677887" },
            { 'id': '4', 'account': "23455566" }
        ];
        this.Loans = [
            { 'id': '1', 'number': "113322" },
            { 'id': '2', 'number': "45544" },
            { 'id': '3', 'number': "5665" },
            { 'id': '4', 'number': "dfff" }
        ];
    }
    ngOnInit() {
        this.Customers = [
            { 'id': '1', 'name': "ravi" },
            { 'id': '2', 'name': "reema" },
            { 'id': '3', 'name': "rupa" },
            { 'id': '4', 'name': "rani" }
        ];
        this.CustomerAccounts = [
            { 'id': '1', 'account': "445555" },
            { 'id': '2', 'account': "333333" },
            { 'id': '3', 'account': "677887" },
            { 'id': '4', 'account': "23455566" }
        ];
        this.Loans = [
            { 'id': '1', 'number': "113322" },
            { 'id': '2', 'number': "45544" },
            { 'id': '3', 'number': "5665" },
            { 'id': '4', 'number': "dfff" }
        ];
    }
    getCustomer(e) {
        console.log(e);
        this.Customer = e;
    }
    getCustomerAccount(e) {
        console.log(e);
        this.CustomerAccount = e;
    }
    getLoan(e) {
        console.log(e);
        this.Loan = e;
    }
    MakePayment() {
        console.log(this.Account);
        console.log(this.Customer);
        console.log(this.CustomerAccount);
        console.log(this.Loan);
        console.log(this.date);
        console.log(this.AmounttoPay);
        console.log(this.Teller);
        console.log(this.Remarks);
        let data = {
            "Account": this.Account,
            "Customer": this.Customer,
            "CustomerAccount": this.CustomerAccount,
            "Loan": this.Loan,
            "date": this.date,
            "AmounttoPay": this.AmounttoPay,
            "Remarks": this.Remarks,
            "Teller": this.Teller
        };
        console.log(data);
        this.service.createPayment(data).subscribe(res => {
            console.log(res);
            // this.disableSubmit = false;
            this.tost.success("Payment created succesfully");
            this.router.navigate(['/payments/list']);
        }, () => {
            //this.disableSubmit = false;
        });
    }
    onReset() {
        this.Account = "";
        this.Customer = "";
        this.CustomerAccount = "";
        this.Loan = "";
        this.AmounttoPay = "";
        this.date = "";
        this.Teller = "";
        this.Remarks = "";
    }
};
NewpaymentsComponent.ctorParameters = () => [
    { type: _payment_service_service__WEBPACK_IMPORTED_MODULE_2__["PaymentServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
NewpaymentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-newpayments',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./newpayments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/payments/newpayments/newpayments.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./newpayments.component.css */ "./src/app/layout/payments/newpayments/newpayments.component.css")).default]
    })
], NewpaymentsComponent);



/***/ }),

/***/ "./src/app/layout/payments/payment-service.service.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/payments/payment-service.service.ts ***!
  \************************************************************/
/*! exports provided: PaymentServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentServiceService", function() { return PaymentServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");



let PaymentServiceService = class PaymentServiceService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getPayment() {
        return this.apiService.get(`/payments`);
    }
    createPayment(data) {
        return this.apiService.post(`/payments`, data);
    }
};
PaymentServiceService.ctorParameters = () => [
    { type: _shared__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
PaymentServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PaymentServiceService);



/***/ }),

/***/ "./src/app/layout/payments/paymentlist/paymentlist.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/layout/payments/paymentlist/paymentlist.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wYXltZW50cy9wYXltZW50bGlzdC9wYXltZW50bGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/layout/payments/paymentlist/paymentlist.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/payments/paymentlist/paymentlist.component.ts ***!
  \**********************************************************************/
/*! exports provided: PaymentlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentlistComponent", function() { return PaymentlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _payment_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../payment-service.service */ "./src/app/layout/payments/payment-service.service.ts");



let PaymentlistComponent = class PaymentlistComponent {
    constructor(service) {
        this.service = service;
        this.selectedIds = [];
    }
    OnCheckboxSelect(id, event) {
        if (event.target.checked === true) {
            this.selectedIds.push({ id: id, checked: event.target.checked });
            console.log('Selected Ids ', this.selectedIds);
        }
        if (event.target.checked === false) {
            this.selectedIds = this.selectedIds.filter((item) => item.id !== id);
            console.log('UnSelected Ids ', this.selectedIds);
        }
    }
    ngOnInit() {
        this.getPayment();
        this.Paymentdata = [
            { "id": "1", "Customer": "Ajay", "Loan": "saving", "Balance": "400000", "AmounttoPay": "30000000", "date": "12/09/2014", "Teller": "sddd", "Actions": "view" },
        ];
    }
    getPayment() {
        this.service.getPayment().subscribe(res => {
            console.log(res);
            this.Paymentdata = res['payments'];
            // this.disableSubmit = false;
        }, () => {
            //this.disableSubmit = false;
        });
    }
};
PaymentlistComponent.ctorParameters = () => [
    { type: _payment_service_service__WEBPACK_IMPORTED_MODULE_2__["PaymentServiceService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('myItem')
], PaymentlistComponent.prototype, "item", void 0);
PaymentlistComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-paymentlist',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./paymentlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/payments/paymentlist/paymentlist.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./paymentlist.component.css */ "./src/app/layout/payments/paymentlist/paymentlist.component.css")).default]
    })
], PaymentlistComponent);



/***/ }),

/***/ "./src/app/layout/payments/payments-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/payments/payments-routing.module.ts ***!
  \************************************************************/
/*! exports provided: PaymentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsRoutingModule", function() { return PaymentsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _payments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payments.component */ "./src/app/layout/payments/payments.component.ts");
/* harmony import */ var _newpayments_newpayments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./newpayments/newpayments.component */ "./src/app/layout/payments/newpayments/newpayments.component.ts");
/* harmony import */ var _paymentlist_paymentlist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paymentlist/paymentlist.component */ "./src/app/layout/payments/paymentlist/paymentlist.component.ts");






const routes = [
    { path: '', component: _payments_component__WEBPACK_IMPORTED_MODULE_3__["PaymentsComponent"] },
    { path: 'new',
        data: {
            breadcrumb: 'New Payment'
        },
        component: _newpayments_newpayments_component__WEBPACK_IMPORTED_MODULE_4__["NewpaymentsComponent"] },
    { path: 'list',
        data: {
            breadcrumb: 'Payment List'
        },
        component: _paymentlist_paymentlist_component__WEBPACK_IMPORTED_MODULE_5__["PaymentlistComponent"] },
];
let PaymentsRoutingModule = class PaymentsRoutingModule {
};
PaymentsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PaymentsRoutingModule);



/***/ }),

/***/ "./src/app/layout/payments/payments.component.css":
/*!********************************************************!*\
  !*** ./src/app/layout/payments/payments.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wYXltZW50cy9wYXltZW50cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/layout/payments/payments.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/payments/payments.component.ts ***!
  \*******************************************************/
/*! exports provided: PaymentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsComponent", function() { return PaymentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PaymentsComponent = class PaymentsComponent {
    constructor() { }
    ngOnInit() {
    }
};
PaymentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payments',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./payments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/payments/payments.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./payments.component.css */ "./src/app/layout/payments/payments.component.css")).default]
    })
], PaymentsComponent);



/***/ }),

/***/ "./src/app/layout/payments/payments.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/payments/payments.module.ts ***!
  \****************************************************/
/*! exports provided: PaymentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsModule", function() { return PaymentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _payments_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payments-routing.module */ "./src/app/layout/payments/payments-routing.module.ts");
/* harmony import */ var _payments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payments.component */ "./src/app/layout/payments/payments.component.ts");
/* harmony import */ var _newpayments_newpayments_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./newpayments/newpayments.component */ "./src/app/layout/payments/newpayments/newpayments.component.ts");
/* harmony import */ var _paymentlist_paymentlist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paymentlist/paymentlist.component */ "./src/app/layout/payments/paymentlist/paymentlist.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








let PaymentsModule = class PaymentsModule {
};
PaymentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_payments_component__WEBPACK_IMPORTED_MODULE_4__["PaymentsComponent"], _newpayments_newpayments_component__WEBPACK_IMPORTED_MODULE_5__["NewpaymentsComponent"], _paymentlist_paymentlist_component__WEBPACK_IMPORTED_MODULE_6__["PaymentlistComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _payments_routing_module__WEBPACK_IMPORTED_MODULE_3__["PaymentsRoutingModule"]
        ]
    })
], PaymentsModule);



/***/ })

}]);
//# sourceMappingURL=payments-payments-module-es2015.js.map