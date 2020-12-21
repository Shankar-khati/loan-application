function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loan-loan-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/loan/listloan/listloan.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/loan/listloan/listloan.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutLoanListloanListloanComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\n    <div class=\"card-body\">\n\n        <!-- Begin Page Content -->\n        <div class=\"container-fluid\">\n\n            <!-- Page Heading -->\n            <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\n                <h1 class=\"h3 mb-0 text-gray-800 page-title\">List of Loans<span>Control Pannel</span></h1>\n                <ol class=\"breadcrumb text-xs bg-transparent\">\n                    <li><i class=\"fas fa-fw fa-tachometer-alt\"></i><a href=\"#\" class=\"text-gray-700\">Home</a><i class=\"fas fa-fw fa-angle-right\"></i></li>\n                    <li><a href=\"#\" class=\"text-gray-700\">Loan</a><i class=\"fas fa-fw fa-angle-right\"></i></li>\n                    <li class=\"active text-gray-500\">List</li>\n                </ol>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <!-- DataTales Example -->\n                    <div class=\"bg-white shadow border-top-green mb-4\">\n\n\n\n\n                        <div class=\"card-body\">\n                            <div class=\"mb-2\">\n                                <button type=\"button\" class=\"btn btn-warning btn-sm\" routerLink=\"/dashboard\"><i class=\"fa fa-reply-all pr-2\" aria-hidden=\"true\"></i>Back</button>\n                                <button type=\"button\" class=\"btn btn-danger btn-sm\"><i class=\"fa fa-times pr-2\" aria-hidden=\"true\"></i>Multiple Delete</button>\n                                <button type=\"button\" class=\"btn btn-success btn-sm\" routerLink=\"/borrowers/new\"><i class=\"fa fa-plus pr-2\" aria-hidden=\"true\"></i>Add Borrower</button>\n                                <button type=\"button\" class=\"btn btn-danger btn-sm\"><i class=\"fa fa-times pr-2\" aria-hidden=\"true\"></i>Overdue: 0</button>\n                                <button type=\"button\" class=\"btn btn-info btn-sm\"><i class=\"fa fa-print pr-2\" aria-hidden=\"true\"></i>Print</button>\n                                <button type=\"button\" class=\"btn btn-success btn-sm\"><i class=\"fa fa-paper-plane pr-2\" aria-hidden=\"true\"></i>Export Excel</button>\n\n\n                            </div>\n                            <hr class=\"mp-4 mt-4\">\n                            <div class=\"table-responsive mt-4\">\n                                <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\n                                    <thead>\n                                        <tr>\n                                            <th><input type=\"checkbox\" name=\"\"></th>\n                                            <th>Kind of Loan</th>\n                                            <th>Account</th>\n                                            <th>Descriptions</th>\n                                            <th>Amount</th>\n                                            <th>Balance</th>\n                                            <th>Customer</th>\n                                            <th>Agent</th>\n                                            <th>Approve By</th>\n                                            <th>Date Release</th>\n                                            <th>Payment Date</th>\n                                            <th>Approve Status</th>\n                                        </tr>\n                                    </thead>\n                                    <!-- <tfoot>\n                      <tr>\n                        <th><input type=\"checkbox\" name=\"\"></th>\n                        <th>Id</th>\n                        <th>Image</th>\n                        <th>First Name</th>\n                        <th>Last Name</th>\n                        <th>Email</th>\n                        <th>Mobile Number</th>\n                        <th>Status</th>\n                        <th>Action</th>\n                      </tr>\n                    </tfoot> -->\n                                    <tbody>\n                                        <tr *ngFor=\"let rawdata of loandata\">\n                                            <td><input type=\"checkbox\" #myItem (change)=\"OnCheckboxSelect(rawdata, $event)\" name=\"item-{{rawdata.id}}\"></td>\n                                            <td>{{rawdata.KindofLoan}}</td>\n                                            <td>{{rawdata.account}}</td>\n                                            <td>{{rawdata.description}}</td>\n                                            <td>{{rawdata.amount}}</td>\n                                            <td>{{rawdata.balance}}</td>\n                                            <td>{{rawdata.borrower}}</td>\n                                            <td>{{rawdata.agent}}</td>\n                                            <td>{{rawdata.tellerBy}}</td>\n                                            <td>{{rawdata.release}}</td>\n                                            <td>{{rawdata.paymentDate}}</td>\n                                            <td><span class=\"bg-warning btn-sm text-white\">{{rawdata.ApproveStatus}}</span></td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n\n\n\n\n\n        </div>\n        <!-- /.container-fluid -->\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/loan/loan.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/loan/loan.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutLoanLoanComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>loan works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/loan/newloan/newloan.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/loan/newloan/newloan.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutLoanNewloanNewloanComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\n    <div class=\"card-body\">\n\n        <!-- Begin Page Content -->\n        <div class=\"container-fluid\">\n\n            <!-- Page Heading -->\n            <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\n                <h1 class=\"h3 mb-0 text-gray-800 page-title\">New Loans<span>Control Pannel</span></h1>\n                <ol class=\"breadcrumb text-xs bg-transparent\">\n                    <li><i class=\"fas fa-fw fa-tachometer-alt\"></i><a href=\"#\" class=\"text-gray-700\">Home</a><i class=\"fas fa-fw fa-angle-right\"></i></li>\n                    <li><a href=\"#\" class=\"text-gray-700\">Loan</a><i class=\"fas fa-fw fa-angle-right\"></i></li>\n                    <li class=\"active text-gray-500\">Add</li>\n                </ol>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-lg-12 mb-4\">\n\n                    <!-- Project Card Example -->\n                    <div class=\"card shadow mb-4\">\n                        <div class=\"card-header py-3\">\n\n                        </div>\n                        <div class=\"card-body\">\n                            <form class=\"user\">\n\n\n                                <div class=\"form-group mt-4\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Borrower</label></div>\n                                        <div class=\"col-lg-10 \">\n                                            <select class=\"form-control form-control-user\" name=\"Borrower\" [(ngModel)]=\"Borrower\" (change)=\"getBorrower($event.target.value)\">\n                                      <option *ngFor=\"let ln of Borrowers\" [value]=\"ln.id\"> {{ln.name}}</option>\n                                      \n                                  </select>{{Borrower1}}\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Account</label></div>\n                                        <div class=\"col-lg-10 \">\n                                            <select class=\"form-control form-control-user\" name=\"Account\" [(ngModel)]=\"Account\" (change)=\"getAccount($event.target.value)\">\n                                      <option  *ngFor=\"let ln of Accounts\" [value]=\"ln.id\">{{ln.name}}</option>\n\n                                  </select>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Amount</label></div>\n                                        <div class=\"col-lg-10\">\n                                            <input type=\"text\" name=\"Amount\" [(ngModel)]=\"Amount\" class=\"form-control form-control-user\" />\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Description</label></div>\n                                        <div class=\"col-lg-10\">\n                                            <textarea class=\"form-control\" name=\"Description\" [(ngModel)]=\"Description\" style=\"height: 100px;\"></textarea>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Email</label></div>\n                                        <div class=\"col-lg-10\">\n                                            <input type=\"Email\" name=\"Email\" [(ngModel)]=\"Email\" class=\"form-control form-control-user\" />\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Date Release</label></div>\n                                        <div class=\"col-lg-10\">\n                                            <div class=\"input-group\">\n                                                <div class=\"input-group-prepend\">\n                                                    <span class=\"input-group-text\" for=\"example\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></span>\n                                                </div>\n                                                <input placeholder=\"dd-mm-yyyy\" type=\"text\" name=\"Release\" [(ngModel)]=\"Release\" class=\"form-control\" />\n                                                <div class=\"input-group-append\">\n                                                    <span class=\"input-group-text\" for=\"example\"><i class=\"fa fa-fw fa-calendar\" aria-hidden=\"true\" for=\"example\"></i></span>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Agent</label></div>\n                                        <div class=\"col-lg-10\">\n                                            <input type=\"text\" class=\"form-control form-control-user\" name=\"Agent\" [(ngModel)]=\"Agent\" value=\"admin\" />\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <hr class=\"mp-4 mt-4\" />\n                                <div class=\"bg-warning pl-2 text-white\">GUARANTOR INFORMATION</div>\n                                <hr class=\"mp-4 mb-4\" />\n\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Guarantor's Passport</label></div>\n                                        <div class=\"col-lg-10\">\n                                            <input type=\"file\" class=\"form-control form-control-user border-0\" name=\"Passport\" [(ngModel)]=\"Passport\" />\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Realationship</label></div>\n                                        <div class=\"col-lg-10\">\n                                            <input type=\"text\" class=\"form-control form-control-user\" name=\"Realationship\" [(ngModel)]=\"Realationship\" />\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Guarantor's Name</label></div>\n                                        <div class=\"col-lg-10\">\n                                            <input type=\"text\" class=\"form-control form-control-user\" name=\"Guarantor\" [(ngModel)]=\"Guarantor\" />\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Guarantor's Phone Number</label></div>\n                                        <div class=\"col-lg-10\">\n                                            <input type=\"text\" class=\"form-control form-control-user\" name=\" PhoneNumber\" [(ngModel)]=\"PhoneNumber\" />\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Guarantor's Address</label></div>\n                                        <div class=\"col-lg-10\">\n                                            <textarea class=\"form-control\" style=\"height: 120px;\" name=\" Address\" [(ngModel)]=\"Address\"></textarea>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Status</label></div>\n                                        <div class=\"col-lg-10\">\n                                            <input type=\"text\" value=\"pending\" name=\" Status\" [(ngModel)]=\"Status\" class=\"form-control form-control-user\" />\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Remarks</label></div>\n                                        <div class=\"col-lg-10\">\n                                            <textarea class=\"form-control\" name=\" Remarks\" [(ngModel)]=\"Remarks\" style=\"height: 100px;\"></textarea>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <hr class=\"mp-4 mt-4\" />\n                                <div class=\"bg-warning pl-2 text-white\">PAYMENT INFORMATION</div>\n                                <hr class=\"mp-4 mb-4\" />\n\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Current Balance</label></div>\n                                        <div class=\"col-lg-10\">\n                                            <input type=\"text\" name=\" Balance\" [(ngModel)]=\"Balance\" class=\"form-control form-control-user\" value=\"0.00\" />\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Payment Date</label></div>\n                                        <div class=\"col-lg-10\">\n                                            <div class=\"input-group\">\n                                                <div class=\"input-group-prepend\">\n                                                    <span class=\"input-group-text\" for=\"example\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></span>\n                                                </div>\n                                                <input placeholder=\"dd-mm-yyyy\" type=\"text\" name=\" PaymentDate\" [(ngModel)]=\"PaymentDate\" id=\"example\" class=\"form-control\" />\n                                                <div class=\"input-group-append\">\n                                                    <span class=\"input-group-text\" for=\"example\"><i class=\"fa fa-fw fa-calendar\" aria-hidden=\"true\" for=\"example\"></i></span>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Amount to Pay</label></div>\n                                        <div class=\"col-lg-10\">\n                                            <input type=\"text\" class=\"form-control form-control-user\" name=\" AmounttoPay\" [(ngModel)]=\"AmounttoPay\" value=\"\" />\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>TellerBy</label></div>\n                                        <div class=\"col-lg-10\">\n                                            <input type=\"text\" class=\"form-control form-control-user\" name=\"TellerBy\" [(ngModel)]=\"TellerBy\" value=\"admin\" />\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Remarks</label></div>\n                                        <div class=\"col-lg-10\">\n                                            <textarea class=\"form-control\" name=\"Remarksid\" [(ngModel)]=\"Remarksid\" style=\"height: 100px;\"></textarea>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <hr class=\"mp-4 mt-4\" />\n                                <div class=\"row\">\n                                    <div class=\"col-lg-12 text-right\">\n                                        <button type=\"button\" (click)=\"onReset()\" class=\"btn btn-info btn-sm\"><i class=\"fa fa-times pr-2\" aria-hidden=\"true\"></i>Reset</button>\n                                        <button type=\"button\" (click)=\"onSend()\" class=\"btn btn-success btn-sm\"><i class=\"fa fa-save pr-2\" aria-hidden=\"true\"></i>Save</button>\n                                    </div>\n                                </div>\n\n                            </form>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n\n\n\n\n\n        </div>\n        <!-- /.container-fluid -->\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/layout/loan/listloan/listloan.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/layout/loan/listloan/listloan.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutLoanListloanListloanComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sb2FuL2xpc3Rsb2FuL2xpc3Rsb2FuLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/layout/loan/listloan/listloan.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/layout/loan/listloan/listloan.component.ts ***!
    \************************************************************/

  /*! exports provided: ListloanComponent */

  /***/
  function srcAppLayoutLoanListloanListloanComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListloanComponent", function () {
      return ListloanComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _loan_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../loan-service.service */
    "./src/app/layout/loan/loan-service.service.ts");

    var ListloanComponent = /*#__PURE__*/function () {
      function ListloanComponent(service) {
        _classCallCheck(this, ListloanComponent);

        this.service = service;
        this.selectedIds = [];
      }

      _createClass(ListloanComponent, [{
        key: "OnCheckboxSelect",
        value: function OnCheckboxSelect(id, event) {
          if (event.target.checked === true) {
            this.selectedIds.push({
              id: id,
              checked: event.target.checked
            });
            console.log('Selected Ids ', this.selectedIds);
          }

          if (event.target.checked === false) {
            this.selectedIds = this.selectedIds.filter(function (item) {
              return item.id !== id;
            });
            console.log('UnSelected Ids ', this.selectedIds);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getloans();
          this.loandata = [{
            "KindofLoan": "Paid",
            "account": "saving",
            "description": "Hii all is well",
            "amount": "40000",
            "balance": "300000",
            "customer": "ajay",
            "agent": "shubham",
            "approveBy": "State goverment",
            "dateRelease": "12/08/2019",
            "paymentDate": "18/07/2020",
            "approveStatus": "valid"
          }];
        }
      }, {
        key: "getloans",
        value: function getloans() {
          var _this = this;

          this.service.getloans().subscribe(function (res) {
            console.log(res);
            _this.loandata = res['loan']; // this.disableSubmit = false;
          }, function () {//this.disableSubmit = false;
          });
        }
      }]);

      return ListloanComponent;
    }();

    ListloanComponent.ctorParameters = function () {
      return [{
        type: _loan_service_service__WEBPACK_IMPORTED_MODULE_2__["LoanServiceService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('myItem')], ListloanComponent.prototype, "item", void 0);
    ListloanComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-listloan',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./listloan.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/loan/listloan/listloan.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./listloan.component.css */
      "./src/app/layout/loan/listloan/listloan.component.css"))["default"]]
    })], ListloanComponent);
    /***/
  },

  /***/
  "./src/app/layout/loan/loan-routing.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/layout/loan/loan-routing.module.ts ***!
    \****************************************************/

  /*! exports provided: LoanRoutingModule */

  /***/
  function srcAppLayoutLoanLoanRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoanRoutingModule", function () {
      return LoanRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _loan_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./loan.component */
    "./src/app/layout/loan/loan.component.ts");
    /* harmony import */


    var _newloan_newloan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./newloan/newloan.component */
    "./src/app/layout/loan/newloan/newloan.component.ts");
    /* harmony import */


    var _listloan_listloan_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./listloan/listloan.component */
    "./src/app/layout/loan/listloan/listloan.component.ts");

    var routes = [{
      path: '',
      component: _loan_component__WEBPACK_IMPORTED_MODULE_3__["LoanComponent"]
    }, {
      path: 'new',
      data: {
        breadcrumb: 'Loan New'
      },
      component: _newloan_newloan_component__WEBPACK_IMPORTED_MODULE_4__["NewloanComponent"]
    }, {
      path: 'list',
      data: {
        breadcrumb: 'Loan List'
      },
      component: _listloan_listloan_component__WEBPACK_IMPORTED_MODULE_5__["ListloanComponent"]
    }];

    var LoanRoutingModule = function LoanRoutingModule() {
      _classCallCheck(this, LoanRoutingModule);
    };

    LoanRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoanRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/loan/loan-service.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/layout/loan/loan-service.service.ts ***!
    \*****************************************************/

  /*! exports provided: LoanServiceService */

  /***/
  function srcAppLayoutLoanLoanServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoanServiceService", function () {
      return LoanServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared */
    "./src/app/shared/index.ts");

    var LoanServiceService = /*#__PURE__*/function () {
      function LoanServiceService(apiService) {
        _classCallCheck(this, LoanServiceService);

        this.apiService = apiService;
      }

      _createClass(LoanServiceService, [{
        key: "getloans",
        value: function getloans() {
          return this.apiService.get("/loans");
        }
      }, {
        key: "createloans",
        value: function createloans(data) {
          return this.apiService.post("/loans", data);
        }
      }]);

      return LoanServiceService;
    }();

    LoanServiceService.ctorParameters = function () {
      return [{
        type: _shared__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    LoanServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoanServiceService);
    /***/
  },

  /***/
  "./src/app/layout/loan/loan.component.css":
  /*!************************************************!*\
    !*** ./src/app/layout/loan/loan.component.css ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutLoanLoanComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sb2FuL2xvYW4uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/layout/loan/loan.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/layout/loan/loan.component.ts ***!
    \***********************************************/

  /*! exports provided: LoanComponent */

  /***/
  function srcAppLayoutLoanLoanComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoanComponent", function () {
      return LoanComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoanComponent = /*#__PURE__*/function () {
      function LoanComponent() {
        _classCallCheck(this, LoanComponent);
      }

      _createClass(LoanComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoanComponent;
    }();

    LoanComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-loan',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./loan.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/loan/loan.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./loan.component.css */
      "./src/app/layout/loan/loan.component.css"))["default"]]
    })], LoanComponent);
    /***/
  },

  /***/
  "./src/app/layout/loan/loan.module.ts":
  /*!********************************************!*\
    !*** ./src/app/layout/loan/loan.module.ts ***!
    \********************************************/

  /*! exports provided: LoanModule */

  /***/
  function srcAppLayoutLoanLoanModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoanModule", function () {
      return LoanModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _loan_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./loan-routing.module */
    "./src/app/layout/loan/loan-routing.module.ts");
    /* harmony import */


    var _loan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./loan.component */
    "./src/app/layout/loan/loan.component.ts");
    /* harmony import */


    var _newloan_newloan_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./newloan/newloan.component */
    "./src/app/layout/loan/newloan/newloan.component.ts");
    /* harmony import */


    var _listloan_listloan_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./listloan/listloan.component */
    "./src/app/layout/loan/listloan/listloan.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LoanModule = function LoanModule() {
      _classCallCheck(this, LoanModule);
    };

    LoanModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_loan_component__WEBPACK_IMPORTED_MODULE_4__["LoanComponent"], _newloan_newloan_component__WEBPACK_IMPORTED_MODULE_5__["NewloanComponent"], _listloan_listloan_component__WEBPACK_IMPORTED_MODULE_6__["ListloanComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _loan_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoanRoutingModule"]]
    })], LoanModule);
    /***/
  },

  /***/
  "./src/app/layout/loan/newloan/newloan.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/layout/loan/newloan/newloan.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutLoanNewloanNewloanComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sb2FuL25ld2xvYW4vbmV3bG9hbi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/layout/loan/newloan/newloan.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/layout/loan/newloan/newloan.component.ts ***!
    \**********************************************************/

  /*! exports provided: NewloanComponent */

  /***/
  function srcAppLayoutLoanNewloanNewloanComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewloanComponent", function () {
      return NewloanComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _loan_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../loan-service.service */
    "./src/app/layout/loan/loan-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var NewloanComponent = /*#__PURE__*/function () {
      function NewloanComponent(service, router, route, tost) {
        _classCallCheck(this, NewloanComponent);

        this.service = service;
        this.router = router;
        this.route = route;
        this.tost = tost;
        this.Borrowers = [{
          'id': '1',
          'name': "English"
        }, {
          'id': '2',
          'name': "Hindi"
        }, {
          'id': '3',
          'name': "Urdu"
        }, {
          'id': '4',
          'name': "Franch"
        }];
        this.Accounts = [{
          'id': '1',
          'name': "00000000"
        }, {
          'id': '2',
          'name': "234445578"
        }, {
          'id': '3',
          'name': "78999900"
        }, {
          'id': '4',
          'name': "6688989"
        }];
        this.Account = "";
        this.Description = "";
        this.Amount = "";
        this.Borrower = "string";
      }

      _createClass(NewloanComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.Borrowers = [{
            'id': '1',
            'name': "English"
          }, {
            'id': '2',
            'name': "Hindi"
          }, {
            'id': '3',
            'name': "Urdu"
          }, {
            'id': '4',
            'name': "Franch"
          }];
          this.Accounts = [{
            'id': '1',
            'name': "00000000"
          }, {
            'id': '2',
            'name': "234445578"
          }, {
            'id': '3',
            'name': "78999900"
          }, {
            'id': '4',
            'name': "6688989"
          }];
        }
      }, {
        key: "getBorrower",
        value: function getBorrower(e) {
          console.log(e);
          this.Borrower = e;
        }
      }, {
        key: "getAccount",
        value: function getAccount(e) {
          console.log(e);
          this.Account = e;
        }
      }, {
        key: "onSend",
        value: function onSend() {
          var _this2 = this;

          console.log(this.Borrower);
          console.log(this.Account);
          console.log(this.Amount);
          console.log(this.Description);
          console.log(this.Email);
          console.log(this.Release);
          console.log(this.Status);
          console.log(this.Agent);
          console.log(this.Passport);
          console.log(this.Realationship);
          console.log(this.Guarantor);
          console.log(this.Remarks);
          console.log(this.PhoneNumber);
          console.log(this.Address);
          console.log(this.Balance);
          console.log(this.PaymentDate);
          console.log(this.AmounttoPay);
          console.log(this.TellerBy);
          console.log(this.Remarksid);
          var data = {
            "borrower": this.Borrower,
            "remarksid": this.Remarksid,
            "status": this.Status,
            "tellerBy": this.TellerBy,
            "amounttoPay": this.AmounttoPay,
            "balance": this.Balance,
            "paymentDate": this.PaymentDate,
            "remarks": this.Remarks,
            "account": this.Account,
            "amount": this.Amount,
            "phoneNumber": this.PhoneNumber,
            "address": this.Address,
            "description": this.Description,
            "email": this.Email,
            "release": this.Release,
            "agent": this.Agent,
            "passport": this.Passport,
            "realationship": this.Realationship,
            "guarantor": this.Guarantor
          };
          console.log(data);
          this.service.createloans(data).subscribe(function (res) {
            console.log(res); // this.disableSubmit = false;

            _this2.tost.success("Loans created succesfully");

            _this2.router.navigate(['/loan/list']);
          }, function () {//this.disableSubmit = false;
          });
        }
      }, {
        key: "onReset",
        value: function onReset() {
          this.Borrower = "", this.Remarksid = "", this.Status = "", this.TellerBy = "", this.AmounttoPay = "", this.Balance = "", this.PaymentDate = "", this.Remarks = "", this.Account = "", this.Amount = "", this.PhoneNumber = "", this.Address = "", this.Description = "", this.Email = "", this.Release = "", this.Agent = "", this.Passport = "", this.Realationship = "", this.Guarantor = "";
        }
      }]);

      return NewloanComponent;
    }();

    NewloanComponent.ctorParameters = function () {
      return [{
        type: _loan_service_service__WEBPACK_IMPORTED_MODULE_2__["LoanServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    NewloanComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-newloan',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./newloan.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/loan/newloan/newloan.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./newloan.component.css */
      "./src/app/layout/loan/newloan/newloan.component.css"))["default"]]
    })], NewloanComponent);
    /***/
  }
}]);
//# sourceMappingURL=loan-loan-module-es5.js.map