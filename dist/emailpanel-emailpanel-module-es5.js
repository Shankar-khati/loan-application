function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["emailpanel-emailpanel-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/emailpanel/emailpanel.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/emailpanel/emailpanel.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutEmailpanelEmailpanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>emailpanel works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/emailpanel/listemail/listemail.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/emailpanel/listemail/listemail.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutEmailpanelListemailListemailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\" id=\"dataTable\">\n    <div class=\"card-body\">\n\n        <!-- Begin Page Content -->\n        <div class=\"container-fluid\">\n\n            <!-- Page Heading -->\n            <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\n                <h1 class=\"h3 mb-0 text-gray-800 page-title\">List of Email Templates<span>Control Pannel</span></h1>\n                <ol class=\"breadcrumb text-xs bg-transparent\">\n                    <li><i class=\"fas fa-fw fa-tachometer-alt\"></i><a href=\"#\" class=\"text-gray-700\">Home</a><i class=\"fas fa-fw fa-angle-right\"></i></li>\n                    <li><a href=\"#\" class=\"text-gray-700\">Email Templates</a><i class=\"fas fa-fw fa-angle-right\"></i></li>\n                    <li class=\"active text-gray-500\">List</li>\n                </ol>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <!-- DataTales Example -->\n                    <div class=\"bg-white shadow border-top-green mb-4\">\n\n\n\n\n                        <div class=\"card-body\">\n\n                            <div class=\"mb-2\">\n                                <button type=\"button\" class=\"btn btn-warning btn-sm\" routerLink=\"/dashboard\"><i class=\"fa fa-reply-all pr-2\" aria-hidden=\"true\"></i>Back</button>\n                                <button type=\"button\" class=\"btn btn-info btn-sm\"><i class=\"fa fa-print pr-2\" aria-hidden=\"true\"></i>Print</button>\n                                <button type=\"button\" class=\"btn btn-success btn-sm\"><i class=\"fa fa-paper-plane pr-2\" aria-hidden=\"true\"></i>Export Excel</button>\n                                <button type=\"button\" class=\"btn btn-info btn-sm\" (click)=\"downloadPDF()\"><i class=\"fa fa-file-pdf pr-2\" aria-hidden=\"true\"></i>Export Pdf</button>\n                            </div>\n                            <hr class=\"mp-4 mt-4\">\n                            <div class=\"table-responsive mt-4\" id=\"content\" #content>\n                                <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\n                                    <thead>\n                                        <tr>\n                                            <th><input type=\"checkbox\" name=\"\"></th>\n                                            <th>Id</th>\n                                            <th>Sender Id</th>\n                                            <th>Receiver Email</th>\n                                            <th>Subject</th>\n                                            <th>Message</th>\n                                        </tr>\n                                    </thead>\n                                    <!-- <tfoot>\n                                        <tr>\n                                            <th><input type=\"checkbox\" name=\"\"></th>\n                                            <th>1</th>\n                                            <th>Sender Id</th>\n                                            <th>Receiver Email</th>\n                                            <th>Subject</th>\n                                            <th>Message</th>\n                                        </tr>\n                                    </tfoot> -->\n                                    <tbody>\n                                        <tr *ngFor=\"let newdata of emaildata\">\n                                            <td><input type=\"checkbox\" #myItem (change)=\"OnCheckboxSelect(newdata.id, $event)\" name=\"item-{{newdata.id}}\"></td>\n                                            <td>{{newdata.reciver}}</td>\n                                            <td>{{newdata.senderid}}</td>\n                                            <td>{{newdata.reciverid}}</td>\n                                            <td>{{newdata.subject}}</td>\n                                            <td>{{newdata.message}}</td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n\n\n\n\n\n        </div>\n        <!-- /.container-fluid -->\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/emailpanel/sendemail/sendemail.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/emailpanel/sendemail/sendemail.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutEmailpanelSendemailSendemailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\n\n\n    <div class=\"card-body\">\n\n        <!-- Begin Page Content -->\n        <div class=\"container-fluid\">\n\n            <!-- Page Heading -->\n            <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\n                <h1 class=\"h3 mb-0 text-gray-800 page-title\">Email Template<span>Control Pannel</span></h1>\n                <ol class=\"breadcrumb text-xs bg-transparent\">\n                    <li><i class=\"fas fa-fw fa-tachometer-alt\"></i><a href=\"#\" class=\"text-gray-700\">Home</a><i class=\"fas fa-fw fa-angle-right\"></i></li>\n                    <li><a href=\"#\" class=\"text-gray-700\">Email Panel</a><i class=\"fas fa-fw fa-angle-right\"></i></li>\n                    <li class=\"active text-gray-500\">Create</li>\n                </ol>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-lg-12 mb-4\">\n\n                    <!-- Project Card Example -->\n                    <div class=\"card shadow mb-4\">\n                        <div class=\"card-header py-3\">\n                            <h6 class=\"m-0\">New Email</h6>\n                        </div>\n                        <div class=\"card-body\">\n                            <form class=\"user\">\n\n                                <div class=\"form-group mt-4\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Select Reciever {{Reciever}}</label></div>\n                                        <div class=\"col-lg-10 \">\n                                            <select class=\"form-control form-control-user\" name=\"reciever\" [(ngModel)]=\"Reciever\" (change)=\"getReciever($event.target.value)\">\n                              <option *ngFor=\"let ln of Recievers\" [value]=\"ln.id\"> {{ln.name}}</option>\n                          </select>\n                                        </div>\n                                    </div>\n\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Subject</label></div>\n                                        <div class=\"col-lg-10\">\n                                            <input type=\"text\" class=\"form-control form-control-user\" name=\"subject\" [(ngModel)]=\"Subject\" />\n\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-right text-green\"><label>Message</label></div>\n                                        <div class=\"col-lg-10\">\n                                            <textarea class=\"form-control\" style=\"height: 200px;\" name=\"message\" [(ngModel)]=\"Message\"></textarea>\n                                        </div>\n                                    </div>\n                                </div>\n                                <hr class=\"mp-4 mt-4\" />\n                                <div class=\"row\">\n                                    <div class=\"col-lg-12 text-right\">\n                                        <button type=\"button\" (click)=\"onReset()\" class=\"btn btn-info btn-sm\">Reset</button>\n                                        <button type=\"button\" (click)=\"onSend()\" class=\"btn btn-success btn-sm\">Send</button>\n                                    </div>\n                                </div>\n\n                            </form>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n\n\n\n\n\n        </div>\n        <!-- /.container-fluid -->\n\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./src/app/layout/emailpanel/email-panel-service.service.ts":
  /*!******************************************************************!*\
    !*** ./src/app/layout/emailpanel/email-panel-service.service.ts ***!
    \******************************************************************/

  /*! exports provided: EmailPanelServiceService */

  /***/
  function srcAppLayoutEmailpanelEmailPanelServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailPanelServiceService", function () {
      return EmailPanelServiceService;
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

    var EmailPanelServiceService = /*#__PURE__*/function () {
      function EmailPanelServiceService(apiService) {
        _classCallCheck(this, EmailPanelServiceService);

        this.apiService = apiService;
      }

      _createClass(EmailPanelServiceService, [{
        key: "getemailPanel",
        value: function getemailPanel() {
          return this.apiService.get("/emailPanel");
        }
      }, {
        key: "createemailPanel",
        value: function createemailPanel(data) {
          return this.apiService.post("/emailPanel", data);
        }
      }]);

      return EmailPanelServiceService;
    }();

    EmailPanelServiceService.ctorParameters = function () {
      return [{
        type: _shared__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    EmailPanelServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], EmailPanelServiceService);
    /***/
  },

  /***/
  "./src/app/layout/emailpanel/emailpanel-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/layout/emailpanel/emailpanel-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: EmailpanelRoutingModule */

  /***/
  function srcAppLayoutEmailpanelEmailpanelRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailpanelRoutingModule", function () {
      return EmailpanelRoutingModule;
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


    var _emailpanel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./emailpanel.component */
    "./src/app/layout/emailpanel/emailpanel.component.ts");
    /* harmony import */


    var _sendemail_sendemail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./sendemail/sendemail.component */
    "./src/app/layout/emailpanel/sendemail/sendemail.component.ts");
    /* harmony import */


    var _listemail_listemail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./listemail/listemail.component */
    "./src/app/layout/emailpanel/listemail/listemail.component.ts");

    var routes = [{
      path: '',
      component: _emailpanel_component__WEBPACK_IMPORTED_MODULE_3__["EmailpanelComponent"]
    }, {
      path: 'send-email',
      data: {
        breadcrumb: 'Send Email'
      },
      component: _sendemail_sendemail_component__WEBPACK_IMPORTED_MODULE_4__["SendemailComponent"]
    }, {
      path: 'list-email',
      data: {
        breadcrumb: 'Email List'
      },
      component: _listemail_listemail_component__WEBPACK_IMPORTED_MODULE_5__["ListemailComponent"]
    }];

    var EmailpanelRoutingModule = function EmailpanelRoutingModule() {
      _classCallCheck(this, EmailpanelRoutingModule);
    };

    EmailpanelRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EmailpanelRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/emailpanel/emailpanel.component.css":
  /*!************************************************************!*\
    !*** ./src/app/layout/emailpanel/emailpanel.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutEmailpanelEmailpanelComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9lbWFpbHBhbmVsL2VtYWlscGFuZWwuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/layout/emailpanel/emailpanel.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/layout/emailpanel/emailpanel.component.ts ***!
    \***********************************************************/

  /*! exports provided: EmailpanelComponent */

  /***/
  function srcAppLayoutEmailpanelEmailpanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailpanelComponent", function () {
      return EmailpanelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EmailpanelComponent = /*#__PURE__*/function () {
      function EmailpanelComponent() {
        _classCallCheck(this, EmailpanelComponent);
      }

      _createClass(EmailpanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EmailpanelComponent;
    }();

    EmailpanelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-emailpanel',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./emailpanel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/emailpanel/emailpanel.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./emailpanel.component.css */
      "./src/app/layout/emailpanel/emailpanel.component.css"))["default"]]
    })], EmailpanelComponent);
    /***/
  },

  /***/
  "./src/app/layout/emailpanel/emailpanel.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/layout/emailpanel/emailpanel.module.ts ***!
    \********************************************************/

  /*! exports provided: EmailpanelModule */

  /***/
  function srcAppLayoutEmailpanelEmailpanelModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailpanelModule", function () {
      return EmailpanelModule;
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


    var _emailpanel_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./emailpanel-routing.module */
    "./src/app/layout/emailpanel/emailpanel-routing.module.ts");
    /* harmony import */


    var _emailpanel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./emailpanel.component */
    "./src/app/layout/emailpanel/emailpanel.component.ts");
    /* harmony import */


    var _sendemail_sendemail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sendemail/sendemail.component */
    "./src/app/layout/emailpanel/sendemail/sendemail.component.ts");
    /* harmony import */


    var _listemail_listemail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./listemail/listemail.component */
    "./src/app/layout/emailpanel/listemail/listemail.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_export_as__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-export-as */
    "./node_modules/ngx-export-as/__ivy_ngcc__/fesm2015/ngx-export-as.js");

    var EmailpanelModule = function EmailpanelModule() {
      _classCallCheck(this, EmailpanelModule);
    };

    EmailpanelModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_emailpanel_component__WEBPACK_IMPORTED_MODULE_4__["EmailpanelComponent"], _sendemail_sendemail_component__WEBPACK_IMPORTED_MODULE_5__["SendemailComponent"], _listemail_listemail_component__WEBPACK_IMPORTED_MODULE_6__["ListemailComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], ngx_export_as__WEBPACK_IMPORTED_MODULE_8__["ExportAsModule"], _emailpanel_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmailpanelRoutingModule"]]
    })], EmailpanelModule);
    /***/
  },

  /***/
  "./src/app/layout/emailpanel/listemail/listemail.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/layout/emailpanel/listemail/listemail.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutEmailpanelListemailListemailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9lbWFpbHBhbmVsL2xpc3RlbWFpbC9saXN0ZW1haWwuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/layout/emailpanel/listemail/listemail.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/layout/emailpanel/listemail/listemail.component.ts ***!
    \********************************************************************/

  /*! exports provided: ListemailComponent */

  /***/
  function srcAppLayoutEmailpanelListemailListemailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListemailComponent", function () {
      return ListemailComponent;
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


    var _email_panel_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../email-panel-service.service */
    "./src/app/layout/emailpanel/email-panel-service.service.ts");
    /* harmony import */


    var ngx_export_as__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-export-as */
    "./node_modules/ngx-export-as/__ivy_ngcc__/fesm2015/ngx-export-as.js");
    /* harmony import */


    var jspdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! jspdf */
    "./node_modules/jspdf/dist/jspdf.es.min.js");

    var ListemailComponent = /*#__PURE__*/function () {
      function ListemailComponent(service, exportAsService) {
        _classCallCheck(this, ListemailComponent);

        this.service = service;
        this.exportAsService = exportAsService;
        this.selectedIds = [];
      }

      _createClass(ListemailComponent, [{
        key: "downloadPDF",
        value: function downloadPDF() {
          alert('sssssssss');
          var doc = new jspdf__WEBPACK_IMPORTED_MODULE_4__["jsPDF"]();

          for (var i = 1; i <= 12; i++) {
            doc.text("Hello world!", 10 * i, 10 * i);
          }

          doc.text("Hello world!", 20, 20);
          doc.save("a4.pdf");
        }
      }, {
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
          this.getemailPanel();
          this.emaildata = [{
            "id": "1",
            "senderid": "text@gmail.com",
            "reciverid": "test@gmail.com",
            "subject": "Test Mail",
            "message": "testing 123"
          }, {
            "id": "2",
            "senderid": "text1@gmail.com",
            "reciverid": "test1@gmail.com",
            "subject": "Test Mail2",
            "message": "testing 1234"
          }];
        }
      }, {
        key: "getemailPanel",
        value: function getemailPanel() {
          var _this = this;

          this.service.getemailPanel().subscribe(function (res) {
            console.log(res);
            _this.emaildata = res['emailPanel']; // this.disableSubmit = false;
          }, function () {//this.disableSubmit = false;
          });
        }
      }]);

      return ListemailComponent;
    }();

    ListemailComponent.ctorParameters = function () {
      return [{
        type: _email_panel_service_service__WEBPACK_IMPORTED_MODULE_2__["EmailPanelServiceService"]
      }, {
        type: ngx_export_as__WEBPACK_IMPORTED_MODULE_3__["ExportAsService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', {
      "static": false
    })], ListemailComponent.prototype, "content", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('myItem')], ListemailComponent.prototype, "item", void 0);
    ListemailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-listemail',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./listemail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/emailpanel/listemail/listemail.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./listemail.component.css */
      "./src/app/layout/emailpanel/listemail/listemail.component.css"))["default"]]
    })], ListemailComponent);
    /***/
  },

  /***/
  "./src/app/layout/emailpanel/sendemail/sendemail.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/layout/emailpanel/sendemail/sendemail.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutEmailpanelSendemailSendemailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".text-right button {\r\n    margin-right: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2VtYWlscGFuZWwvc2VuZGVtYWlsL3NlbmRlbWFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2VtYWlscGFuZWwvc2VuZGVtYWlsL3NlbmRlbWFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtcmlnaHQgYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/layout/emailpanel/sendemail/sendemail.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/layout/emailpanel/sendemail/sendemail.component.ts ***!
    \********************************************************************/

  /*! exports provided: SendemailComponent */

  /***/
  function srcAppLayoutEmailpanelSendemailSendemailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SendemailComponent", function () {
      return SendemailComponent;
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


    var _email_panel_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../email-panel-service.service */
    "./src/app/layout/emailpanel/email-panel-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var SendemailComponent = /*#__PURE__*/function () {
      function SendemailComponent(service, router, route, tost) {
        _classCallCheck(this, SendemailComponent);

        this.service = service;
        this.router = router;
        this.route = route;
        this.tost = tost;
        this.Recievers = [{
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
        this.Reciever = "string";
        this.Subject = "";
        this.Message = "";
      }

      _createClass(SendemailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.Recievers = [{
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
        }
      }, {
        key: "getReciever",
        value: function getReciever(e) {
          console.log(e);
          this.Reciever = e;
        }
      }, {
        key: "onSend",
        value: function onSend() {
          var _this2 = this;

          console.log(this.Reciever);
          console.log(this.Subject);
          console.log(this.Message);
          var data = {
            "reciver": this.Reciever,
            "subject": this.Subject,
            "message": this.Message,
            "senderid": "text@gmail.com",
            "reciverid": "test@gmail.com"
          };
          console.log(data);
          this.service.createemailPanel(data).subscribe(function (res) {
            console.log(res); // this.disableSubmit = false;

            _this2.tost.success("EmailPanel created succesfully");

            _this2.router.navigate(['/email-panel/list-email']);
          }, function () {//this.disableSubmit = false;
          });
        }
      }, {
        key: "onReset",
        value: function onReset() {
          this.Reciever = "";
          this.Subject = "";
          this.Message = "";
        }
      }]);

      return SendemailComponent;
    }();

    SendemailComponent.ctorParameters = function () {
      return [{
        type: _email_panel_service_service__WEBPACK_IMPORTED_MODULE_2__["EmailPanelServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    SendemailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sendemail',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sendemail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/emailpanel/sendemail/sendemail.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./sendemail.component.css */
      "./src/app/layout/emailpanel/sendemail/sendemail.component.css"))["default"]]
    })], SendemailComponent);
    /***/
  }
}]);
//# sourceMappingURL=emailpanel-emailpanel-module-es5.js.map