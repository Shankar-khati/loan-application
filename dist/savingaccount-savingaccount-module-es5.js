function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["savingaccount-savingaccount-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/savingaccount/alltransaction/alltransaction.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/savingaccount/alltransaction/alltransaction.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutSavingaccountAlltransactionAlltransactionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\n    <div class=\"card-body\">\n\n        <!-- Begin Page Content -->\n        <div class=\"container-fluid\">\n\n            <!-- Page Heading -->\n            <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\n                <h1 class=\"h3 mb-0 text-gray-800 page-title\">All Transaction<span>Control Pannel</span></h1>\n                <ol class=\"breadcrumb text-xs bg-transparent\">\n                    <li><i class=\"fas fa-fw fa-tachometer-alt\"></i><a href=\"#\" class=\"text-gray-700\">Home</a><i class=\"fas fa-fw fa-angle-right\"></i></li>\n                    <li><a href=\"#\" class=\"text-gray-700\">Customer</a><i class=\"fas fa-fw fa-angle-right\"></i></li>\n                    <li class=\"active text-gray-500\">Transaction</li>\n                </ol>\n            </div>\n\n\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <!-- DataTales Example -->\n                    <div class=\"bg-white shadow border-top-green mb-4\">\n\n\n\n\n                        <div class=\"card-body\">\n                            <div class=\"mb-2\">\n                                <button type=\"button\" class=\"btn btn-warning btn-sm\" routerLink=\"/dashboard\"><i class=\"fa fa-reply-all pr-2\" aria-hidden=\"true\"></i>Back</button>\n                                <button type=\"button\" class=\"btn btn-danger btn-sm\"><i class=\"fa fa-times pr-2\" aria-hidden=\"true\"></i>Multiple Delete</button>\n                                <button type=\"button\" class=\"btn btn-info btn-sm\" routerLink=\"/savingaccount/deposit\"><i class=\"fa fa-plus pr-2\" aria-hidden=\"true\"></i>Make Deposite</button>\n                                <button type=\"button\" class=\"btn btn-info btn-sm\" routerLink=\"/savingaccount/withdraw\"><i class=\"fa fa-plus pr-2\" aria-hidden=\"true\"></i>Withdraw Money</button>\n                                <button type=\"button\" class=\"btn btn-info btn-sm\"><i class=\"fa fa-envelope pr-2\" aria-hidden=\"true\"></i>Send SMS</button>\n                                <button type=\"button\" class=\"btn btn-primary btn-sm\"><i class=\"fa fa-print pr-2\" aria-hidden=\"true\"></i>Print</button>\n\n                                <button type=\"button\" class=\"btn btn-success btn-sm \"><i class=\"fa fa-paper-plane pr-2\" aria-hidden=\"true\"></i>Export Excel</button>\n                                <button type=\"button\" class=\"btn btn-success btn-sm \"><i class=\"fa fa-file-pdf pr-2\" aria-hidden=\"true\"></i>Export Pdf</button>\n\n\n                            </div>\n                            <hr class=\"mp-4 mt-4\">\n                            <div class=\"table-responsive mt-4\">\n                                <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\n                                    <thead>\n                                        <tr>\n                                            <th><input type=\"checkbox\" name=\"\"></th>\n                                            <th>TaxId</th>\n                                            <th>T_Type</th>\n                                            <th>AcctNo.</th>\n                                            <th>FName</th>\n                                            <th>LName</th>\n                                            <th>Email</th>\n                                            <th>Phone</th>\n                                            <th>Amount</th>\n                                            <th>Date/Time</th>\n                                            <th>Action</th>\n                                        </tr>\n                                    </thead>\n                                    <!-- <tfoot>\n                      <tr>\n                        <th><input type=\"checkbox\" name=\"\"></th>\n                        <th>Id</th>\n                        <th>Image</th>\n                        <th>First Name</th>\n                        <th>Last Name</th>\n                        <th>Email</th>\n                        <th>Mobile Number</th>\n                        <th>Status</th>\n                        <th>Action</th>\n                      </tr>\n                    </tfoot> -->\n                                    <tbody>\n                                        <tr *ngFor=\"let newdata of transactions\">\n                                            <td><input type=\"checkbox\" #myItem (change)=\"OnCheckboxSelect(newdata, $event)\" name=\"item-{{newdata.id}}\"></td>\n                                            <td>{{newdata.TaxId}}</td>\n                                            <td>{{newdata.T_Type}}</td>\n                                            <td>{{newdata.AcctNo}}</td>\n                                            <td>{{newdata.FName}}</td>\n                                            <td>{{newdata.LName}}</td>\n                                            <td>{{newdata.Email}}</td>\n                                            <td>{{newdata.Phone}}</td>\n                                            <td>{{newdata.Amount}}</td>\n                                            <td>{{newdata.Time}}</td>\n                                            <td><button type=\"button\" class=\"btn btn-primary btn-sm\"><i class=\"fa fa-print \" aria-hidden=\"true\"></i>\n                                                {{newdata.Action}}</button></td>\n                                        </tr>\n\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n\n\n\n\n\n        </div>\n        <!-- /.container-fluid -->\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/savingaccount/customers/customers.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/savingaccount/customers/customers.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutSavingaccountCustomersCustomersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\n    <div class=\"card-body\">\n\n        <p>addborrowers works!</p>\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/savingaccount/depositmoney/depositmoney.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/savingaccount/depositmoney/depositmoney.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutSavingaccountDepositmoneyDepositmoneyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\n    <div class=\"card-body\">\n\n        <!-- Begin Page Content -->\n        <div class=\"container-fluid\">\n\n            <!-- Page Heading -->\n            <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\n                <h1 class=\"h3 mb-0 text-gray-800 page-title\">Deposite Money<span>Control Pannel</span></h1>\n                <ol class=\"breadcrumb text-xs bg-transparent\">\n                    <li><i class=\"fas fa-fw fa-tachometer-alt\"></i><a href=\"#\" class=\"text-gray-700\">Home</a><i class=\"fas fa-fw fa-angle-right\"></i></li>\n                    <li><a href=\"#\" class=\"text-gray-700\">Transaction</a><i class=\"fas fa-fw fa-angle-right\"></i></li>\n                    <li class=\"active text-gray-500\">Deposit</li>\n                </ol>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-lg-12 mb-4\">\n\n                    <!-- Project Card Example -->\n                    <div class=\"card shadow mb-4\">\n                        <div class=\"card-header py-3\">\n                            <h6 class=\"m-0\"><i class=\"fas fa-user pr-2\"></i>Customer Deposite Form</h6>\n                        </div>\n                        <div class=\"card-body\">\n                            <form class=\"user\">\n\n                                <div class=\"form-group mt-4\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Select Account</label></div>\n                                        <div class=\"col-lg-10 \">\n                                            <select class=\"form-control form-control-user\" name=\"SelectAccount\" [(ngModel)]=\"SelectAccount\" (change)=\"getSelectAccount($event.target.value)\">\n                                      <option *ngFor=\"let ln of SelectAccounts\" [value]=\"ln.id\">{{ln.name}}</option>\n                                      \n                                  </select>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Amount Deposit</label></div>\n                                        <div class=\"col-lg-10\">\n                                            <input type=\"text\" name=\"AmountDeposit\" [(ngModel)]=\"AmountDeposit\" placeholder=\"Amount Deposit\" class=\"form-control form-control-user\" />\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <hr class=\"mp-4 mt-4\" />\n                                <div class=\"row\">\n                                    <div class=\"col-lg-12 text-right\">\n                                        <button type=\"button\" (click)=\"onReset()\" class=\"btn btn-info btn-sm\"><i class=\"fa fa-times pr-2\" aria-hidden=\"true\"></i>Reset</button>\n                                        <button type=\"button\" (click)=\"onDeposit()\" class=\"btn btn-success btn-sm\"><i class=\"fa fa-save pr-2\" aria-hidden=\"true\"></i>Deposit</button>\n                                    </div>\n                                </div>\n\n                            </form>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n\n\n\n\n\n        </div>\n        <!-- /.container-fluid -->\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/savingaccount/savingaccount.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/savingaccount/savingaccount.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutSavingaccountSavingaccountComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>savingaccount works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/savingaccount/withdrawmoney/withdrawmoney.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/savingaccount/withdrawmoney/withdrawmoney.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutSavingaccountWithdrawmoneyWithdrawmoneyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\n    <div class=\"card-body\">\n\n        <p>addborrowers works!</p>\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/layout/savingaccount/alltransaction/alltransaction.component.css":
  /*!**********************************************************************************!*\
    !*** ./src/app/layout/savingaccount/alltransaction/alltransaction.component.css ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutSavingaccountAlltransactionAlltransactionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zYXZpbmdhY2NvdW50L2FsbHRyYW5zYWN0aW9uL2FsbHRyYW5zYWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/layout/savingaccount/alltransaction/alltransaction.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/layout/savingaccount/alltransaction/alltransaction.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: AlltransactionComponent */

  /***/
  function srcAppLayoutSavingaccountAlltransactionAlltransactionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlltransactionComponent", function () {
      return AlltransactionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AlltransactionComponent = /*#__PURE__*/function () {
      function AlltransactionComponent() {
        _classCallCheck(this, AlltransactionComponent);

        this.selectedIds = [];
      }

      _createClass(AlltransactionComponent, [{
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
          this.transactions = [{
            'TaxId': '1',
            'T_Type': "Deposit",
            'AcctNo': "4546678755",
            'FName': "gdd",
            "LName": "chaudhary",
            'Email': "hbtisurendra@gmail.com",
            'Phone': "9648142095",
            'Amount': "2334434",
            "Date/Time": "13/04/2015",
            "Action": "Review"
          }, {
            'TaxId': '2',
            'T_Type': "NoDeposit",
            'AcctNo': "12365432",
            'FName': "asddd",
            "LName": "verma",
            'Email': "hbtisurendra@gmail2.com",
            'Phone': "959596666",
            'Amount': "34333",
            "Date/Time": "20/04/2015",
            "Action": "Review"
          }];
        }
      }]);

      return AlltransactionComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('myItem')], AlltransactionComponent.prototype, "item", void 0);
    AlltransactionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-alltransaction',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./alltransaction.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/savingaccount/alltransaction/alltransaction.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./alltransaction.component.css */
      "./src/app/layout/savingaccount/alltransaction/alltransaction.component.css"))["default"]]
    })], AlltransactionComponent);
    /***/
  },

  /***/
  "./src/app/layout/savingaccount/customers/customers.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/layout/savingaccount/customers/customers.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutSavingaccountCustomersCustomersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zYXZpbmdhY2NvdW50L2N1c3RvbWVycy9jdXN0b21lcnMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/layout/savingaccount/customers/customers.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/layout/savingaccount/customers/customers.component.ts ***!
    \***********************************************************************/

  /*! exports provided: CustomersComponent */

  /***/
  function srcAppLayoutSavingaccountCustomersCustomersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomersComponent", function () {
      return CustomersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CustomersComponent = /*#__PURE__*/function () {
      function CustomersComponent() {
        _classCallCheck(this, CustomersComponent);
      }

      _createClass(CustomersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CustomersComponent;
    }();

    CustomersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-customers',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./customers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/savingaccount/customers/customers.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./customers.component.css */
      "./src/app/layout/savingaccount/customers/customers.component.css"))["default"]]
    })], CustomersComponent);
    /***/
  },

  /***/
  "./src/app/layout/savingaccount/depositmoney/depositmoney.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/layout/savingaccount/depositmoney/depositmoney.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutSavingaccountDepositmoneyDepositmoneyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zYXZpbmdhY2NvdW50L2RlcG9zaXRtb25leS9kZXBvc2l0bW9uZXkuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/layout/savingaccount/depositmoney/depositmoney.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/layout/savingaccount/depositmoney/depositmoney.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: DepositmoneyComponent */

  /***/
  function srcAppLayoutSavingaccountDepositmoneyDepositmoneyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DepositmoneyComponent", function () {
      return DepositmoneyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DepositmoneyComponent = /*#__PURE__*/function () {
      function DepositmoneyComponent() {
        _classCallCheck(this, DepositmoneyComponent);

        this.SelectAccounts = [{
          'id': '1',
          'name': "000000"
        }, {
          'id': '2',
          'name': "2355"
        }, {
          'id': '3',
          'name': "23457"
        }, {
          'id': '4',
          'name': "577555"
        }];
      }

      _createClass(DepositmoneyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.SelectAccounts = [{
            'id': '1',
            'name': "000000"
          }, {
            'id': '2',
            'name': "2355"
          }, {
            'id': '3',
            'name': "23457"
          }, {
            'id': '4',
            'name': "577555"
          }];
        }
      }, {
        key: "getSelectAccount",
        value: function getSelectAccount(e) {
          console.log(e);
          this.SelectAccount = e;
        }
      }, {
        key: "onDeposit",
        value: function onDeposit() {
          console.log(this.SelectAccount);
          console.log(this.AmountDeposit);
          var data = {
            "SelectAccount": this.SelectAccount,
            "AmountDeposit": this.AmountDeposit
          };
          console.log(data);
        }
      }, {
        key: "onReset",
        value: function onReset() {
          this.SelectAccount = "", this.AmountDeposit = "";
        }
      }]);

      return DepositmoneyComponent;
    }();

    DepositmoneyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-depositmoney',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./depositmoney.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/savingaccount/depositmoney/depositmoney.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./depositmoney.component.css */
      "./src/app/layout/savingaccount/depositmoney/depositmoney.component.css"))["default"]]
    })], DepositmoneyComponent);
    /***/
  },

  /***/
  "./src/app/layout/savingaccount/savingaccount-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/layout/savingaccount/savingaccount-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: SavingaccountRoutingModule */

  /***/
  function srcAppLayoutSavingaccountSavingaccountRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SavingaccountRoutingModule", function () {
      return SavingaccountRoutingModule;
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


    var _savingaccount_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./savingaccount.component */
    "./src/app/layout/savingaccount/savingaccount.component.ts");
    /* harmony import */


    var _customers_customers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./customers/customers.component */
    "./src/app/layout/savingaccount/customers/customers.component.ts");
    /* harmony import */


    var _depositmoney_depositmoney_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./depositmoney/depositmoney.component */
    "./src/app/layout/savingaccount/depositmoney/depositmoney.component.ts");
    /* harmony import */


    var _withdrawmoney_withdrawmoney_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./withdrawmoney/withdrawmoney.component */
    "./src/app/layout/savingaccount/withdrawmoney/withdrawmoney.component.ts");
    /* harmony import */


    var _alltransaction_alltransaction_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./alltransaction/alltransaction.component */
    "./src/app/layout/savingaccount/alltransaction/alltransaction.component.ts");

    var routes = [{
      path: '',
      component: _savingaccount_component__WEBPACK_IMPORTED_MODULE_3__["SavingaccountComponent"]
    }, {
      path: 'customers',
      component: _customers_customers_component__WEBPACK_IMPORTED_MODULE_4__["CustomersComponent"]
    }, {
      path: 'deposit',
      component: _depositmoney_depositmoney_component__WEBPACK_IMPORTED_MODULE_5__["DepositmoneyComponent"]
    }, {
      path: 'withdraw',
      component: _withdrawmoney_withdrawmoney_component__WEBPACK_IMPORTED_MODULE_6__["WithdrawmoneyComponent"]
    }, {
      path: 'alltransaction',
      component: _alltransaction_alltransaction_component__WEBPACK_IMPORTED_MODULE_7__["AlltransactionComponent"]
    }];

    var SavingaccountRoutingModule = function SavingaccountRoutingModule() {
      _classCallCheck(this, SavingaccountRoutingModule);
    };

    SavingaccountRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SavingaccountRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/savingaccount/savingaccount.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/layout/savingaccount/savingaccount.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutSavingaccountSavingaccountComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zYXZpbmdhY2NvdW50L3NhdmluZ2FjY291bnQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/layout/savingaccount/savingaccount.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/layout/savingaccount/savingaccount.component.ts ***!
    \*****************************************************************/

  /*! exports provided: SavingaccountComponent */

  /***/
  function srcAppLayoutSavingaccountSavingaccountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SavingaccountComponent", function () {
      return SavingaccountComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SavingaccountComponent = /*#__PURE__*/function () {
      function SavingaccountComponent() {
        _classCallCheck(this, SavingaccountComponent);
      }

      _createClass(SavingaccountComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SavingaccountComponent;
    }();

    SavingaccountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-savingaccount',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./savingaccount.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/savingaccount/savingaccount.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./savingaccount.component.css */
      "./src/app/layout/savingaccount/savingaccount.component.css"))["default"]]
    })], SavingaccountComponent);
    /***/
  },

  /***/
  "./src/app/layout/savingaccount/savingaccount.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/layout/savingaccount/savingaccount.module.ts ***!
    \**************************************************************/

  /*! exports provided: SavingaccountModule */

  /***/
  function srcAppLayoutSavingaccountSavingaccountModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SavingaccountModule", function () {
      return SavingaccountModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _savingaccount_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./savingaccount-routing.module */
    "./src/app/layout/savingaccount/savingaccount-routing.module.ts");
    /* harmony import */


    var _savingaccount_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./savingaccount.component */
    "./src/app/layout/savingaccount/savingaccount.component.ts");
    /* harmony import */


    var _customers_customers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./customers/customers.component */
    "./src/app/layout/savingaccount/customers/customers.component.ts");
    /* harmony import */


    var _depositmoney_depositmoney_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./depositmoney/depositmoney.component */
    "./src/app/layout/savingaccount/depositmoney/depositmoney.component.ts");
    /* harmony import */


    var _withdrawmoney_withdrawmoney_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./withdrawmoney/withdrawmoney.component */
    "./src/app/layout/savingaccount/withdrawmoney/withdrawmoney.component.ts");
    /* harmony import */


    var _alltransaction_alltransaction_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./alltransaction/alltransaction.component */
    "./src/app/layout/savingaccount/alltransaction/alltransaction.component.ts");

    var SavingaccountModule = function SavingaccountModule() {
      _classCallCheck(this, SavingaccountModule);
    };

    SavingaccountModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_savingaccount_component__WEBPACK_IMPORTED_MODULE_5__["SavingaccountComponent"], _customers_customers_component__WEBPACK_IMPORTED_MODULE_6__["CustomersComponent"], _depositmoney_depositmoney_component__WEBPACK_IMPORTED_MODULE_7__["DepositmoneyComponent"], _withdrawmoney_withdrawmoney_component__WEBPACK_IMPORTED_MODULE_8__["WithdrawmoneyComponent"], _alltransaction_alltransaction_component__WEBPACK_IMPORTED_MODULE_9__["AlltransactionComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _savingaccount_routing_module__WEBPACK_IMPORTED_MODULE_4__["SavingaccountRoutingModule"]]
    })], SavingaccountModule);
    /***/
  },

  /***/
  "./src/app/layout/savingaccount/withdrawmoney/withdrawmoney.component.css":
  /*!********************************************************************************!*\
    !*** ./src/app/layout/savingaccount/withdrawmoney/withdrawmoney.component.css ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutSavingaccountWithdrawmoneyWithdrawmoneyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zYXZpbmdhY2NvdW50L3dpdGhkcmF3bW9uZXkvd2l0aGRyYXdtb25leS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/layout/savingaccount/withdrawmoney/withdrawmoney.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/layout/savingaccount/withdrawmoney/withdrawmoney.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: WithdrawmoneyComponent */

  /***/
  function srcAppLayoutSavingaccountWithdrawmoneyWithdrawmoneyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WithdrawmoneyComponent", function () {
      return WithdrawmoneyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var WithdrawmoneyComponent = /*#__PURE__*/function () {
      function WithdrawmoneyComponent() {
        _classCallCheck(this, WithdrawmoneyComponent);
      }

      _createClass(WithdrawmoneyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WithdrawmoneyComponent;
    }();

    WithdrawmoneyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-withdrawmoney',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./withdrawmoney.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/savingaccount/withdrawmoney/withdrawmoney.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./withdrawmoney.component.css */
      "./src/app/layout/savingaccount/withdrawmoney/withdrawmoney.component.css"))["default"]]
    })], WithdrawmoneyComponent);
    /***/
  }
}]);
//# sourceMappingURL=savingaccount-savingaccount-module-es5.js.map