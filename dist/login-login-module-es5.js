function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [@routerTransition] class=\"login-page\">\r\n    <div class=\"row justify-content-md-center\">\r\n        <div class=\"col-md-4\">\r\n            <img src=\"../../assets/images/logo-admin.png\" width=\"50%\" />\r\n            <div *ngIf=\"!resetPassword; else forgotPassword\">\r\n                <form [formGroup]=\"loginForm\" novalidate role=\"form\" (keydown.enter)=\"onLoggedIn()\">\r\n                    <div style=\"margin-bottom: -30px;\" class=\"form-content\">\r\n                        <div style=\"margin-bottom: 10px;\">\r\n                            <input formControlName=\"userEmail\" [placeholder]=\"'Email' | translate\" class=\"form-control input-underline input-lg\" type=\"text\" />\r\n                            <div style=\"text-align: left;\" *ngIf=\"loginForm.controls['userEmail'].errors && (loginForm.controls['userEmail'].dirty || loginForm.controls['userEmail'].touched) || FormSubmitted\">\r\n                                <span class=\" text-danger error\" *ngIf=\"loginForm.controls['userEmail'].errors?.required\">\r\n                                    * Email is required.\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <div>\r\n                            <input formControlName=\"userPassword\" placeholder=\"Password\" class=\"form-control input-underline input-lg\" type=\"password\" />\r\n                            <div style=\"text-align: left;\" *ngIf=\"loginForm.controls['userPassword'].errors && (loginForm.controls['userPassword'].dirty || loginForm.controls['userPassword'].touched) || FormSubmitted\">\r\n                                <span class=\" text-danger error\" *ngIf=\"loginForm.controls['userPassword'].errors?.required\">\r\n                                    * Password is required.\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <p (click)=\"resetPasswordScreen()\" style=\"cursor :pointer\" class=\"mt-2\"><u>Forgot Password</u>\r\n                        </p>\r\n                    </div>\r\n                    <a *ngIf=\"!disableSubmit\" (click)=\"onLoggedIn()\" class=\"btn rounded-btn\">\r\n                        Log in\r\n                    </a>\r\n                    <div *ngIf=\"disableSubmit\" class=\"text-center\">\r\n                        <div class=\"spinner-border\" role=\"status\">\r\n                            <span class=\"sr-only\">Loading...</span>\r\n                        </div>\r\n                        <p>\r\n                            Please Wait ...\r\n                        </p>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <ng-template #forgotPassword>\r\n                <form [formGroup]=\"forgotPasswordForm\" novalidate role=\"form\" (keydown.enter)=\"forgotPasswordFun()\">\r\n                    <div style=\"margin-bottom: -10px;\" class=\"form-content\">\r\n                        <div style=\"margin-bottom: 10px;\">\r\n                            <input formControlName=\"userEmail\" [placeholder]=\"'Email' | translate\" class=\"form-control input-underline input-lg\" type=\"text\" />\r\n                            <div style=\"text-align: left;\" *ngIf=\"forgotPasswordForm.controls['userEmail'].errors && (forgotPasswordForm.controls['userEmail'].dirty || forgotPasswordForm.controls['userEmail'].touched) || FormSubmitted\">\r\n                                <span class=\" text-danger error\" *ngIf=\"forgotPasswordForm.controls['userEmail'].errors?.required\">\r\n                                    * Email is required.\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <a type=\"submit\" *ngIf=\"!disableSubmit1\" (click)=\"forgotPasswordFun()\" class=\"btn rounded-btn\">\r\n                        Forgot Password\r\n                    </a>\r\n                    <div *ngIf=\"disableSubmit1\" class=\"text-center\">\r\n                        <div class=\"spinner-border\" role=\"status\">\r\n                            <span class=\"sr-only\">Loading...</span>\r\n                        </div>\r\n                        <p>\r\n                            Please Wait ...\r\n                        </p>\r\n                    </div>\r\n                </form>\r\n\r\n                <p (click)=\"resetPasswordScreen()\" style=\"cursor :pointer\" class=\"mt-4\">\r\n                    <u>\r\n                        Login Page\r\n                    </u>\r\n                </p>\r\n            </ng-template>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/login/login-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/login/login-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginRoutingModule */

  /***/
  function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function () {
      return LoginRoutingModule;
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


    var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/login/login.component.ts");

    var routes = [{
      path: '',
      component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }];

    var LoginRoutingModule = function LoginRoutingModule() {
      _classCallCheck(this, LoginRoutingModule);
    };

    LoginRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginRoutingModule);
    /***/
  },

  /***/
  "./src/app/login/login.component.scss":
  /*!********************************************!*\
    !*** ./src/app/login/login.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n}\n\n.login-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  background: #222;\n  text-align: center;\n  color: #fff;\n  padding: 3em;\n}\n\n.login-page .col-lg-4 {\n  padding: 0;\n}\n\n.login-page .input-lg {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 0;\n}\n\n.login-page .input-underline {\n  background: 0 0;\n  border: none;\n  box-shadow: none;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n  color: #fff;\n  border-radius: 0;\n}\n\n.login-page .input-underline:focus {\n  border-bottom: 2px solid #fff;\n  box-shadow: none;\n}\n\n.login-page .rounded-btn {\n  border-radius: 50px;\n  color: rgba(255, 255, 255, 0.8);\n  background: #222;\n  border: 2px solid rgba(255, 255, 255, 0.8);\n  font-size: 18px;\n  line-height: 40px;\n  padding: 0 25px;\n}\n\n.login-page .rounded-btn:hover,\n.login-page .rounded-btn:focus,\n.login-page .rounded-btn:active,\n.login-page .rounded-btn:visited {\n  color: white;\n  border: 2px solid white;\n  outline: none;\n}\n\n.login-page h1 {\n  font-weight: 300;\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-size: 36px;\n}\n\n.login-page h1 small {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.login-page .form-group {\n  padding: 8px 0;\n}\n\n.login-page .form-group input::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n\n.login-page .form-group input:-moz-placeholder {\n  /* Firefox 18- */\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n\n.login-page .form-group input::-moz-placeholder {\n  /* Firefox 19+ */\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n\n.login-page .form-group input:-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.6) !important;\n}\n\n.login-page .form-content {\n  padding: 40px 0;\n}\n\n.login-page .user-avatar {\n  border-radius: 50%;\n  border: 2px solid #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXHNoaXZlbmRyYVxcZ3dlYlxcd2ViL3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksY0FBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQVpzQjtFQWF0QixrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQUo7O0FERUk7RUFDSSxVQUFBO0FDQVI7O0FER0k7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0RSOztBRElJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlEQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDRlI7O0FES0k7RUFDSSw2QkFBQTtFQUNBLGdCQUFBO0FDSFI7O0FETUk7RUFFSSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBL0NrQjtFQWdEbEIsMENBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDSlI7O0FET0k7Ozs7RUFJSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FDTFI7O0FEUUk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDTlI7O0FEUVE7RUFDSSwrQkFBQTtBQ05aOztBRFVJO0VBQ0ksY0FBQTtBQ1JSOztBRFVRO0VBQ0ksMENBQUE7QUNSWjs7QURXUTtFQUNJLGdCQUFBO0VBQ0EsMENBQUE7QUNUWjs7QURZUTtFQUNJLGdCQUFBO0VBQ0EsMENBQUE7QUNWWjs7QURhUTtFQUNJLDBDQUFBO0FDWFo7O0FEZUk7RUFDSSxlQUFBO0FDYlI7O0FEZ0JJO0VBRUksa0JBQUE7RUFDQSxzQkFBQTtBQ2RSIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkdG9wbmF2LWJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubG9naW4tcGFnZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJhY2tncm91bmQ6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogM2VtO1xyXG5cclxuICAgIC5jb2wtbGctNCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuXHJcbiAgICAuaW5wdXQtbGcge1xyXG4gICAgICAgIGhlaWdodDogNDZweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjMzMzMzMzM7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIH1cclxuXHJcbiAgICAuaW5wdXQtdW5kZXJsaW5lIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAwIDA7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbnB1dC11bmRlcmxpbmU6Zm9jdXMge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnJvdW5kZWQtYnRuIHtcclxuICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjVweDtcclxuICAgIH1cclxuXHJcbiAgICAucm91bmRlZC1idG46aG92ZXIsXHJcbiAgICAucm91bmRlZC1idG46Zm9jdXMsXHJcbiAgICAucm91bmRlZC1idG46YWN0aXZlLFxyXG4gICAgLnJvdW5kZWQtYnRuOnZpc2l0ZWQge1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG5cclxuICAgICAgICBzbWFsbCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMDtcclxuXHJcbiAgICAgICAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dDotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgLyogRmlyZWZveCAxOC0gKi9cclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAvKiBGaXJlZm94IDE5KyAqL1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHggMDtcclxuICAgIH1cclxuXHJcbiAgICAudXNlci1hdmF0YXIge1xyXG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubG9naW4tcGFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZDogIzIyMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogM2VtO1xufVxuLmxvZ2luLXBhZ2UgLmNvbC1sZy00IHtcbiAgcGFkZGluZzogMDtcbn1cbi5sb2dpbi1wYWdlIC5pbnB1dC1sZyB7XG4gIGhlaWdodDogNDZweDtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjMzMzMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4ubG9naW4tcGFnZSAuaW5wdXQtdW5kZXJsaW5lIHtcbiAgYmFja2dyb3VuZDogMCAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmxvZ2luLXBhZ2UgLmlucHV0LXVuZGVybGluZTpmb2N1cyB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmxvZ2luLXBhZ2UgLnJvdW5kZWQtYnRuIHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBiYWNrZ3JvdW5kOiAjMjIyO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDAgMjVweDtcbn1cbi5sb2dpbi1wYWdlIC5yb3VuZGVkLWJ0bjpob3Zlcixcbi5sb2dpbi1wYWdlIC5yb3VuZGVkLWJ0bjpmb2N1cyxcbi5sb2dpbi1wYWdlIC5yb3VuZGVkLWJ0bjphY3RpdmUsXG4ubG9naW4tcGFnZSAucm91bmRlZC1idG46dmlzaXRlZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ubG9naW4tcGFnZSBoMSB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMzZweDtcbn1cbi5sb2dpbi1wYWdlIGgxIHNtYWxsIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbn1cbi5sb2dpbi1wYWdlIC5mb3JtLWdyb3VwIHtcbiAgcGFkZGluZzogOHB4IDA7XG59XG4ubG9naW4tcGFnZSAuZm9ybS1ncm91cCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgIWltcG9ydGFudDtcbn1cbi5sb2dpbi1wYWdlIC5mb3JtLWdyb3VwIGlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94IDE4LSAqL1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpICFpbXBvcnRhbnQ7XG59XG4ubG9naW4tcGFnZSAuZm9ybS1ncm91cCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIC8qIEZpcmVmb3ggMTkrICovXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgIWltcG9ydGFudDtcbn1cbi5sb2dpbi1wYWdlIC5mb3JtLWdyb3VwIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgIWltcG9ydGFudDtcbn1cbi5sb2dpbi1wYWdlIC5mb3JtLWNvbnRlbnQge1xuICBwYWRkaW5nOiA0MHB4IDA7XG59XG4ubG9naW4tcGFnZSAudXNlci1hdmF0YXIge1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
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


    var _router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../router.animations */
    "./src/app/router.animations.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _service_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./service/api.service */
    "./src/app/login/service/api.service.ts");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared */
    "./src/app/shared/index.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(router, fb, Toastr, apiService, jwtService) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.fb = fb;
        this.Toastr = Toastr;
        this.apiService = apiService;
        this.jwtService = jwtService;
        this.FormSubmitted = false;
        this.disableSubmit = false;
        this.FormSubmitted1 = false;
        this.disableSubmit1 = false;
        this.resetPassword = false;
        this.loginForm = fb.group({
          'userEmail': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
          'userPassword': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
        this.forgotPasswordForm = fb.group({
          'userEmail': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "resetPasswordScreen",
        value: function resetPasswordScreen() {
          this.resetPassword = !this.resetPassword;
        }
      }, {
        key: "onLoggedIn",
        value: function onLoggedIn() {
          var _this = this;

          if (this.disableSubmit) {
            return;
          }

          this.FormSubmitted = true;
          this.disableSubmit = true;
          console.log(this.loginForm.value, 'val');

          if (!this.loginForm.valid) {
            this.disableSubmit = false;
            return;
          } else {
            // let res = {"status":"success","message":"User Login Successfully","data":{}};
            // this.disableSubmit = false;
            // this.Toastr.success(res.message);
            // this.jwtService.saveToken(res.data.token);
            // this.jwtService.setIsLogin();
            //this.router.navigate(['/dashboard']);
            this.apiService.loginStaff(this.loginForm.value).subscribe(function (res) {
              console.log(res);
              _this.disableSubmit = false;

              _this.Toastr.success("Login Successfully");

              _this.jwtService.saveToken(res.token, res.user.userRole);

              _this.jwtService.setIsLogin();

              _this.router.navigate(['/dashboard']);
            }, function () {
              setTimeout(function () {
                _this.disableSubmit = false;
              }, 1000);
            });
          }
        }
      }, {
        key: "forgotPasswordFun",
        value: function forgotPasswordFun() {
          var _this2 = this;

          if (this.disableSubmit1) {
            return;
          }

          this.FormSubmitted1 = true;
          this.disableSubmit1 = true;
          console.log(this.forgotPasswordForm.value, 'val');

          if (!this.forgotPasswordForm.valid) {
            this.disableSubmit1 = false;
            return;
          } else {
            this.apiService.forgotPassword(this.forgotPasswordForm.value.email).subscribe(function (res) {
              _this2.disableSubmit1 = false;

              _this2.Toastr.success(res.message);

              _this2.resetPassword = false;
            }, function () {
              setTimeout(function () {
                _this2.disableSubmit1 = false;
              }, 1000);
            });
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }, {
        type: _service_api_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"]
      }, {
        type: _shared__WEBPACK_IMPORTED_MODULE_7__["JwtService"]
      }];
    };

    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_3__["routerTransition"])()],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/login/login.component.scss"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
      return LoginModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/login/login-routing.module.ts");
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LoginModule = function LoginModule() {
      _classCallCheck(this, LoginModule);
    };

    LoginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
      declarations: [_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]]
    })], LoginModule);
    /***/
  },

  /***/
  "./src/app/login/service/api.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/login/service/api.service.ts ***!
    \**********************************************/

  /*! exports provided: ApisService */

  /***/
  function srcAppLoginServiceApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApisService", function () {
      return ApisService;
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

    var ApisService = /*#__PURE__*/function () {
      function ApisService(apiService) {
        _classCallCheck(this, ApisService);

        this.apiService = apiService;
      }

      _createClass(ApisService, [{
        key: "loginStaff",
        value: function loginStaff(data) {
          return this.apiService.post("/users/login", data);
        }
      }, {
        key: "forgotPassword",
        value: function forgotPassword(email) {
          return this.apiService.get("/forgotPassword?email=".concat(email, "&user=staff"));
        }
      }]);

      return ApisService;
    }();

    ApisService.ctorParameters = function () {
      return [{
        type: _shared__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    ApisService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ApisService);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map