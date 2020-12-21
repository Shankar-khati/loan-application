(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mywallet-mywallet-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/mywallet/mywallet.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/mywallet/mywallet.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <div class=\"card-body\">\n\n        <!-- Begin Page Content -->\n        <div class=\"container-fluid\">\n\n            <!-- Page Heading -->\n            <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\n                <h1 class=\"h3 mb-0 text-gray-800 page-title\">My Wallet<span>Control Pannel</span></h1>\n                <ol class=\"breadcrumb text-xs bg-transparent\">\n                    <li><i class=\"fas fa-fw fa-tachometer-alt\"></i><a href=\"#\" class=\"text-gray-700\">Home</a><i class=\"fas fa-fw fa-angle-right\"></i></li>\n                    <li><a href=\"#\" class=\"text-gray-700\">Wallet</a><i class=\"fas fa-fw fa-angle-right\"></i></li>\n                    <li class=\"active text-gray-500\">List</li>\n                </ol>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <!-- DataTales Example -->\n                    <div class=\"bg-white shadow border-top-green mb-4\">\n\n\n\n\n                        <div class=\"card-body\">\n                            <!-- Modal -->\n                            <div class=\"modal fade\" id=\"add\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n                                <div class=\"modal-dialog modal-lg\" role=\"document\">\n                                    <div class=\"modal-content\">\n                                        <div class=\"modal-header d-block\">\n                                            <h3 class=\"modal-title text-center\" id=\"exampleModalLabel\">Insert Into Wallet</h3>\n                                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n                                        </div>\n                                        <div class=\"modal-body\">\n                                            <form>\n                                                <div class=\"form-group\">\n                                                    <label for=\"exampleInputPassword1\">Amount</label>\n\n                                                    <input type=\"text\" class=\"form-control\" id=\"inputPassword\">\n\n                                                </div>\n\n                                                <div class=\"form-group\">\n                                                    <label for=\"exampleFormControlTextarea1\">Description</label>\n                                                    <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\n                                                </div>\n                                                <div class=\"form-group\">\n                                                    <label for=\"exampleFormControlSelect1\">Wallet Type</label>\n                                                    <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                                                      <option>debit</option>\n                                                      <option>Credit</option>\n                                                     \n                                                    </select>\n                                                </div>\n\n                                            </form>\n                                        </div>\n                                        <div class=\"modal-footer\">\n                                            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                                            <button type=\"button\" class=\"btn btn-primary\">Save</button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"modal fade\" id=\"transferMoney\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n                                <div class=\"modal-dialog modal-lg\">\n                                    <div class=\"modal-content\">\n                                        <div class=\"modal-header\">\n                                            <h3 class=\"modal-title w-100 text-center\" id=\"exampleModalLabel\">Money Transfer </h3>\n                                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n                                        </div>\n                                        <div class=\"modal-body\">\n                                            <form>\n                                                <div class=\"form-group\">\n                                                    <label for=\"exampleInputPassword1\">Amount</label>\n\n                                                    <input type=\"text\" class=\"form-control\" id=\"inputPassword\">\n\n                                                </div>\n\n                                                <div class=\"form-group\">\n                                                    <label for=\"exampleFormControlTextarea1\">Description</label>\n                                                    <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\n                                                </div>\n                                                <div class=\"form-group\">\n                                                    <label for=\"exampleFormControlSelect1\">Staff</label>\n                                                    <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                                                      <option>debit</option>\n                                                      <option>Credit</option>\n                                                     \n                                                    </select>\n                                                </div>\n\n                                            </form>\n                                        </div>\n                                        <div class=\"modal-footer\">\n                                            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                                            <button type=\"button\" class=\"btn btn-primary\">Transfer</button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"mb-2\">\n                                <button type=\"button\" class=\"btn btn-warning btn-sm\" routerLink=\"/dashboard\"><i class=\"fa fa-reply-all pr-2\" aria-hidden=\"true\"></i>Back</button>\n                                <button type=\"button\" class=\"btn btn-danger btn-sm\"><i class=\"fa fa-times pr-2\" aria-hidden=\"true\"></i>Multiple Delete</button>\n                                <button type=\"button\" class=\"btn btn-success btn-sm\" data-toggle=\"modal\" data-target=\"#transferMoney\"><i class=\"fa fa-plus pr-2\" aria-hidden=\"true\"   ></i>\n                                   Transfer Money\n                                  </button>\n                                <button type=\"button\" class=\"btn btn-success btn-sm\" data-toggle=\"modal\" data-target=\"#add\"><i class=\"fa fa-plus pr-2\" aria-hidden=\"true\"   ></i>\n                                    Add New Wallet\n                                  </button>\n\n                                <button type=\"button\" class=\"btn btn-info btn-sm total-wallets-btn text-left\">Total Wallets: <span class=\"custmo-button btn btn-info btn-md\">$1025.00</span></button>\n\n                            </div>\n                            <hr class=\"mp-4 mt-4\">\n                            <div class=\"table-responsive mt-4\">\n                                <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\n                                    <thead>\n                                        <tr>\n                                            <th><input type=\"checkbox\" name=\"\"></th>\n                                            <th>Id</th>\n                                            <th>Amount</th>\n                                            <th>Descriptions</th>\n                                            <th>Wallet Type</th>\n                                            <th>Transaction Date</th>\n                                            <th>Action</th>\n                                        </tr>\n                                    </thead>\n                                    <!-- <tfoot>\n                      <tr>\n                        <th><input type=\"checkbox\" name=\"\"></th>\n                        <th>Id</th>\n                        <th>Image</th>\n                        <th>First Name</th>\n                        <th>Last Name</th>\n                        <th>Email</th>\n                        <th>Mobile Number</th>\n                        <th>Status</th>\n                        <th>Action</th>\n                      </tr>\n                    </tfoot> -->\n                                    <tbody>\n                                        <tr *ngFor=\"let rawdata of walletdata\">\n                                            <td><input type=\"checkbox\" #myItem (change)=\"OnCheckboxSelect(rawdata, $event)\" name=\"item-{{rawdata.id}}\"></td>\n                                            <th>{{rawdata.id}}</th>\n                                            <td>{{rawdata.Amount}}</td>\n                                            <td>{{rawdata.Descriptions}}</td>\n                                            <td>{{rawdata.WalletType}}</td>\n                                            <td>{{rawdata.TransactionDate}}</td>\n                                            <td><button type=\"button\" class=\"btn btn-danger btn-sm\"><i class=\"fa fa-trash \" aria-hidden=\"true\"></i>\n                                                {{rawdata.Action}}</button></td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n\n\n\n\n\n        </div>\n        <!-- /.container-fluid -->\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/layout/mywallet/mywallet-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/mywallet/mywallet-routing.module.ts ***!
  \************************************************************/
/*! exports provided: MywalletRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MywalletRoutingModule", function() { return MywalletRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mywallet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mywallet.component */ "./src/app/layout/mywallet/mywallet.component.ts");




const routes = [{ path: '', component: _mywallet_component__WEBPACK_IMPORTED_MODULE_3__["MywalletComponent"] }];
let MywalletRoutingModule = class MywalletRoutingModule {
};
MywalletRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MywalletRoutingModule);



/***/ }),

/***/ "./src/app/layout/mywallet/mywallet.component.css":
/*!********************************************************!*\
  !*** ./src/app/layout/mywallet/mywallet.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-lg {\r\n    max-width: 70% !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L215d2FsbGV0L215d2FsbGV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbXl3YWxsZXQvbXl3YWxsZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1sZyB7XHJcbiAgICBtYXgtd2lkdGg6IDcwJSAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/layout/mywallet/mywallet.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/mywallet/mywallet.component.ts ***!
  \*******************************************************/
/*! exports provided: MywalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MywalletComponent", function() { return MywalletComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MywalletComponent = class MywalletComponent {
    constructor() {
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
        this.walletdata = [
            { "id": "1", "Amount": "40000", "Descriptions": "Hii all is well", "WalletType": "fix", "TransactionDate": "16/09/2020", "Action": "Delete" },
            { "id": "2", "Amount": "50000", "Descriptions": "Hii all is not well", "WalletType": "Notfix", "TransactionDate": "16/12/2020", "Action": "Delete2" },
        ];
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('myItem')
], MywalletComponent.prototype, "item", void 0);
MywalletComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mywallet',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mywallet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/mywallet/mywallet.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mywallet.component.css */ "./src/app/layout/mywallet/mywallet.component.css")).default]
    })
], MywalletComponent);



/***/ }),

/***/ "./src/app/layout/mywallet/mywallet.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/mywallet/mywallet.module.ts ***!
  \****************************************************/
/*! exports provided: MywalletModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MywalletModule", function() { return MywalletModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _mywallet_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mywallet-routing.module */ "./src/app/layout/mywallet/mywallet-routing.module.ts");
/* harmony import */ var _mywallet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mywallet.component */ "./src/app/layout/mywallet/mywallet.component.ts");





let MywalletModule = class MywalletModule {
};
MywalletModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_mywallet_component__WEBPACK_IMPORTED_MODULE_4__["MywalletComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _mywallet_routing_module__WEBPACK_IMPORTED_MODULE_3__["MywalletRoutingModule"]
        ]
    })
], MywalletModule);



/***/ })

}]);
//# sourceMappingURL=mywallet-mywallet-module-es2015.js.map