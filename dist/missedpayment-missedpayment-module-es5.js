function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["missedpayment-missedpayment-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/missedpayment/missedpayment.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/missedpayment/missedpayment.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutMissedpaymentMissedpaymentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\n    <div class=\"card-body\">\n\n        <!-- Begin Page Content -->\n        <div class=\"container-fluid\">\n\n            <!-- Page Heading -->\n            <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\n                <h1 class=\"h3 mb-0 text-gray-800 page-title\">List of Missed Payments<span>Control Pannel</span></h1>\n                <ol class=\"breadcrumb text-xs bg-transparent\">\n                    <li><i class=\"fas fa-fw fa-tachometer-alt\"></i><a href=\"#\" class=\"text-gray-700\">Home</a><i class=\"fas fa-fw fa-angle-right\"></i></li>\n                    <li><a href=\"#\" class=\"text-gray-700\">List Payment</a><i class=\"fas fa-fw fa-angle-right\"></i></li>\n                    <li class=\"active text-gray-500\">List</li>\n                </ol>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <!-- DataTales Example -->\n                    <div class=\"bg-white shadow border-top-green mb-4\">\n\n\n\n\n                        <div class=\"card-body\">\n                            <div class=\"mb-2\">\n                                <button type=\"button\" class=\"btn btn-warning btn-sm\" routerLink=\"/dashboard\"><i class=\"fa fa-reply-all pr-2\" aria-hidden=\"true\"></i>Back</button>\n                                <button type=\"button\" class=\"btn btn-danger btn-sm\"><i class=\"fa fa-times pr-2\" aria-hidden=\"true\"></i>Multiple Delete</button>\n                                <button type=\"button\" class=\"btn btn-success btn-sm\" routerLink=\"/loan/new\"><i class=\"fa fa-plus pr-2\" aria-hidden=\"true\"></i>Add Loans</button>\n                                <button type=\"button\" class=\"btn btn-danger btn-sm\"><i class=\"fa fa-times pr-2\" aria-hidden=\"true\"></i>Overdue: 0</button>\n\n\n\n                            </div>\n                            <hr class=\"mp-4 mt-4\">\n                            <div class=\"table-responsive mt-4\">\n                                <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\n                                    <thead>\n                                        <tr>\n                                            <th><input type=\"checkbox\" name=\"\"></th>\n                                            <th>Kind of Loan</th>\n                                            <th>Account</th>\n                                            <th>Descriptions</th>\n                                            <th>Amount</th>\n                                            <th>Balance</th>\n                                            <th>Customer</th>\n                                            <th>Agent</th>\n                                            <th>Approve By</th>\n                                            <th>Date Release</th>\n                                            <th>Payment Date</th>\n                                            <th>Approve Status</th>\n                                        </tr>\n                                    </thead>\n                                    <!-- <tfoot>\n                      <tr>\n                        <th><input type=\"checkbox\" name=\"\"></th>\n                        <th>Id</th>\n                        <th>Image</th>\n                        <th>First Name</th>\n                        <th>Last Name</th>\n                        <th>Email</th>\n                        <th>Mobile Number</th>\n                        <th>Status</th>\n                        <th>Action</th>\n                      </tr>\n                    </tfoot> -->\n                                    <tbody>\n                                        <tr *ngFor=\"let rawdata of misseddata\">\n                                            <td><input type=\"checkbox\" #myItem (change)=\"OnCheckboxSelect(rawdata, $event)\" name=\"item-{{rawdata.id}}\"></td>\n                                            <td>{{rawdata.KindofLoan}}</td>\n                                            <td>--{{rawdata.Account}}--</td>\n                                            <td>{{rawdata.Descriptions}}</td>\n                                            <td>{{rawdata.Amount}}</td>\n                                            <td>{{rawdata.Balance}}</td>\n                                            <td>{{rawdata.Customer}}</td>\n                                            <td>{{rawdata.AgentApproveBy}}</td>\n                                            <td>{{rawdata.ApproveBy}}</td>\n                                            <td>{{rawdata.DateRelease}}</td>\n                                            <td>{{rawdata.PaymentDate}}</td>\n                                            <td><span class=\"bg-warning btn-sm text-white\">{{rawdata.ApproveStatus}}</span></td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n\n\n\n\n\n        </div>\n        <!-- /.container-fluid -->\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/layout/missedpayment/missedpayment-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/layout/missedpayment/missedpayment-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: MissedpaymentRoutingModule */

  /***/
  function srcAppLayoutMissedpaymentMissedpaymentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MissedpaymentRoutingModule", function () {
      return MissedpaymentRoutingModule;
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


    var _missedpayment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./missedpayment.component */
    "./src/app/layout/missedpayment/missedpayment.component.ts");

    var routes = [{
      path: '',
      component: _missedpayment_component__WEBPACK_IMPORTED_MODULE_3__["MissedpaymentComponent"]
    }];

    var MissedpaymentRoutingModule = function MissedpaymentRoutingModule() {
      _classCallCheck(this, MissedpaymentRoutingModule);
    };

    MissedpaymentRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MissedpaymentRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/missedpayment/missedpayment.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/layout/missedpayment/missedpayment.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutMissedpaymentMissedpaymentComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9taXNzZWRwYXltZW50L21pc3NlZHBheW1lbnQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/layout/missedpayment/missedpayment.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/layout/missedpayment/missedpayment.component.ts ***!
    \*****************************************************************/

  /*! exports provided: MissedpaymentComponent */

  /***/
  function srcAppLayoutMissedpaymentMissedpaymentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MissedpaymentComponent", function () {
      return MissedpaymentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MissedpaymentComponent = /*#__PURE__*/function () {
      function MissedpaymentComponent() {
        _classCallCheck(this, MissedpaymentComponent);

        this.selectedIds = [];
      }

      _createClass(MissedpaymentComponent, [{
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
          this.misseddata = [{
            "KindofLoan": "Paid",
            "Account": "saving",
            "Descriptions": "Hii all is well",
            "Amount": "40000",
            "Balance": "300000",
            "Customer": "ajay",
            "Agent": "shubham",
            "ApproveBy": "State goverment",
            "DateRelease": "12/08/2019",
            "PaymentDate": "18/07/2020",
            "ApproveStatus": "valid"
          }];
        }
      }]);

      return MissedpaymentComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('myItem')], MissedpaymentComponent.prototype, "item", void 0);
    MissedpaymentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-missedpayment',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./missedpayment.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/missedpayment/missedpayment.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./missedpayment.component.css */
      "./src/app/layout/missedpayment/missedpayment.component.css"))["default"]]
    })], MissedpaymentComponent);
    /***/
  },

  /***/
  "./src/app/layout/missedpayment/missedpayment.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/layout/missedpayment/missedpayment.module.ts ***!
    \**************************************************************/

  /*! exports provided: MissedpaymentModule */

  /***/
  function srcAppLayoutMissedpaymentMissedpaymentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MissedpaymentModule", function () {
      return MissedpaymentModule;
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


    var _missedpayment_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./missedpayment-routing.module */
    "./src/app/layout/missedpayment/missedpayment-routing.module.ts");
    /* harmony import */


    var _missedpayment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./missedpayment.component */
    "./src/app/layout/missedpayment/missedpayment.component.ts");

    var MissedpaymentModule = function MissedpaymentModule() {
      _classCallCheck(this, MissedpaymentModule);
    };

    MissedpaymentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_missedpayment_component__WEBPACK_IMPORTED_MODULE_4__["MissedpaymentComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _missedpayment_routing_module__WEBPACK_IMPORTED_MODULE_3__["MissedpaymentRoutingModule"]]
    })], MissedpaymentModule);
    /***/
  }
}]);
//# sourceMappingURL=missedpayment-missedpayment-module-es5.js.map