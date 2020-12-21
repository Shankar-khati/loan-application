(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-progress></ng-progress>\r\n<router-outlet></router-outlet>\r\n<audio id=\"myAudio\">\r\n    <source src=\"assets/sounds/notify.ogg\" type=\"audio/ogg\">\r\n    <source src=\"assets/sounds/notify.m4r\" type=\"audio/m4r\">\r\n    <source src=\"assets/sounds/notify.mp3\" type=\"audio/mpeg\">\r\n    Your browser does not support the audio element.\r\n</audio>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/page-header/page-header.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/page-header/page-header.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-xl-12\">\r\n        <h2 class=\"page-header\">\r\n            {{ heading }}\r\n        </h2>\r\n        <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\">\r\n                <i class=\"fa fa-dashboard\"></i> <a [routerLink]=\"['/dashboard']\" href=\"Javascript:void(0)\">Dashboard</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\"><i class=\"fa {{ icon }}\"></i> {{ heading }}</li>\r\n        </ol>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/stat/stat.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/stat/stat.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card text-white bg-{{ bgClass }}\">\r\n    <div class=\"card-header\">\r\n        <div class=\"row\">\r\n            <div class=\"col col-xs-3\">\r\n                <i class=\"fa {{ icon }} fa-5x\"></i>\r\n            </div>\r\n            <div class=\"col col-xs-9 text-right\">\r\n                <div class=\"d-block huge\">{{ count }}</div>\r\n                <div class=\"d-block\">{{ label }}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-footer\">\r\n        <span class=\"float-left\">View Details {{ data }}</span>\r\n        <a class=\"float-right card-inverse\" href=\"javascript:void(0)\">\r\n            <span><i class=\"fa fa-arrow-circle-right\"></i></span>\r\n        </a>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");




const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | layout-layout-module */ "layout-layout-module").then(__webpack_require__.bind(null, /*! ./layout/layout.module */ "./src/app/layout/layout.module.ts")).then((m) => m.LayoutModule),
        canActivate: [_shared__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    { path: 'login', loadChildren: () => Promise.all(/*! import() | login-login-module */[__webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null, /*! ./login/login.module */ "./src/app/login/login.module.ts")).then((m) => m.LoginModule) },
    { path: 'signup', loadChildren: () => Promise.all(/*! import() | signup-signup-module */[__webpack_require__.e("common"), __webpack_require__.e("signup-signup-module")]).then(__webpack_require__.bind(null, /*! ./signup/signup.module */ "./src/app/signup/signup.module.ts")).then((m) => m.SignupModule) },
    {
        path: 'error',
        loadChildren: () => __webpack_require__.e(/*! import() | server-error-server-error-module */ "server-error-server-error-module").then(__webpack_require__.bind(null, /*! ./server-error/server-error.module */ "./src/app/server-error/server-error.module.ts")).then((m) => m.ServerErrorModule)
    },
    {
        path: 'access-denied',
        loadChildren: () => __webpack_require__.e(/*! import() | access-denied-access-denied-module */ "access-denied-access-denied-module").then(__webpack_require__.bind(null, /*! ./access-denied/access-denied.module */ "./src/app/access-denied/access-denied.module.ts")).then((m) => m.AccessDeniedModule)
    },
    {
        path: 'reset-password',
        loadChildren: () => __webpack_require__.e(/*! import() | reset-password-reset-password-module */ "reset-password-reset-password-module").then(__webpack_require__.bind(null, /*! ./reset-password/reset-password.module */ "./src/app/reset-password/reset-password.module.ts")).then((m) => m.ResetPasswordModule)
    },
    { path: 'not-found', loadChildren: () => __webpack_require__.e(/*! import() | not-found-not-found-module */ "not-found-not-found-module").then(__webpack_require__.bind(null, /*! ./not-found/not-found.module */ "./src/app/not-found/not-found.module.ts")).then((m) => m.NotFoundModule) },
    { path: '**', redirectTo: 'not-found' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() { }
    ngOnInit() {
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/modules/language-translation/language-translation.module */ "./src/app/shared/modules/language-translation/language-translation.module.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-progressbar */ "./node_modules/ngx-progressbar/__ivy_ngcc__/fesm2015/ngx-progressbar.js");
/* harmony import */ var ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-progressbar/http */ "./node_modules/ngx-progressbar/__ivy_ngcc__/fesm2015/ngx-progressbar-http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_export_as__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-export-as */ "./node_modules/ngx-export-as/__ivy_ngcc__/fesm2015/ngx-export-as.js");
















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            ngx_export_as__WEBPACK_IMPORTED_MODULE_14__["ExportAsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _shared_modules_language_translation_language_translation_module__WEBPACK_IMPORTED_MODULE_9__["LanguageTranslationModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot({
                progressBar: true,
                closeButton: true,
                positionClass: 'toast-bottom-right',
                preventDuplicates: true,
            }),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastContainerModule"],
            ngx_progressbar__WEBPACK_IMPORTED_MODULE_11__["NgProgressModule"],
            ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_12__["NgProgressHttpModule"],
        ],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        providers: [_shared__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _shared__WEBPACK_IMPORTED_MODULE_8__["HttpTokenInterceptor"], multi: true }, _shared__WEBPACK_IMPORTED_MODULE_8__["ApiService"], _shared__WEBPACK_IMPORTED_MODULE_8__["JwtService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/shared/guard/auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/shared/guard/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let AuthGuard = class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        if (localStorage.getItem('isLoggedin')) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/shared/guard/index.ts":
/*!***************************************!*\
  !*** ./src/app/shared/guard/index.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/shared/guard/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: PageHeaderModule, StatModule, SharedPipesModule, AuthGuard, JwtService, ApiService, HttpTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules */ "./src/app/shared/modules/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageHeaderModule", function() { return _modules__WEBPACK_IMPORTED_MODULE_0__["PageHeaderModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatModule", function() { return _modules__WEBPACK_IMPORTED_MODULE_0__["StatModule"]; });

/* harmony import */ var _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipes/shared-pipes.module */ "./src/app/shared/pipes/shared-pipes.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedPipesModule", function() { return _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_1__["SharedPipesModule"]; });

/* harmony import */ var _guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guard */ "./src/app/shared/guard/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services */ "./src/app/shared/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return _services__WEBPACK_IMPORTED_MODULE_3__["JwtService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _services__WEBPACK_IMPORTED_MODULE_3__["ApiService"]; });

/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptors */ "./src/app/shared/interceptors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpTokenInterceptor", function() { return _interceptors__WEBPACK_IMPORTED_MODULE_4__["HttpTokenInterceptor"]; });








/***/ }),

/***/ "./src/app/shared/interceptors/http.token.interceptor.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/interceptors/http.token.interceptor.ts ***!
  \***************************************************************/
/*! exports provided: HttpTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpTokenInterceptor", function() { return HttpTokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/app/shared/services/index.ts");



let HttpTokenInterceptor = class HttpTokenInterceptor {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    setUser() {
        this.authHeader = this.jwtService.getToken();
    }
    intercept(req, next) {
        this.setUser();
        if (this.authHeader === null) {
            return next.handle(req.clone());
        }
        const clonedReq = req.clone({ headers: req.headers.set('Authorization', `${this.authHeader}`) });
        return next.handle(clonedReq);
    }
};
HttpTokenInterceptor.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["JwtService"] }
];
HttpTokenInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], HttpTokenInterceptor);



/***/ }),

/***/ "./src/app/shared/interceptors/index.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/interceptors/index.ts ***!
  \**********************************************/
/*! exports provided: HttpTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _http_token_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.token.interceptor */ "./src/app/shared/interceptors/http.token.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpTokenInterceptor", function() { return _http_token_interceptor__WEBPACK_IMPORTED_MODULE_0__["HttpTokenInterceptor"]; });




/***/ }),

/***/ "./src/app/shared/modules/index.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/modules/index.ts ***!
  \*****************************************/
/*! exports provided: PageHeaderModule, StatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-header/page-header.module */ "./src/app/shared/modules/page-header/page-header.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageHeaderModule", function() { return _page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__["PageHeaderModule"]; });

/* harmony import */ var _stat_stat_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stat/stat.module */ "./src/app/shared/modules/stat/stat.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatModule", function() { return _stat_stat_module__WEBPACK_IMPORTED_MODULE_1__["StatModule"]; });





/***/ }),

/***/ "./src/app/shared/modules/language-translation/language-translation.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/shared/modules/language-translation/language-translation.module.ts ***!
  \************************************************************************************/
/*! exports provided: HttpLoaderFactory, LanguageTranslationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageTranslationModule", function() { return LanguageTranslationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");

/**
 * This module is used to language translations.
 * The translations are saved in a json file in /src/app/assets/i18n directory
 * Docs: https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-angular7-app-with-ngx-translate
 */


// import ngx-translate and the http loader


// ngx-translate - required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__["TranslateHttpLoader"](http);
}
let LanguageTranslationModule = class LanguageTranslationModule {
    constructor(translate) {
        this.translate = translate;
        // Gets Default language from browser if available, otherwise set English ad default
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
    }
};
LanguageTranslationModule.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
];
LanguageTranslationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [],
        imports: [
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
                }
            })
        ],
        exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]]
    })
], LanguageTranslationModule);



/***/ }),

/***/ "./src/app/shared/modules/page-header/page-header.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/shared/modules/page-header/page-header.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2R1bGVzL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/modules/page-header/page-header.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/modules/page-header/page-header.component.ts ***!
  \*********************************************************************/
/*! exports provided: PageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function() { return PageHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PageHeaderComponent = class PageHeaderComponent {
    constructor() { }
    ngOnInit() { }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageHeaderComponent.prototype, "heading", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageHeaderComponent.prototype, "icon", void 0);
PageHeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-header',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./page-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/page-header/page-header.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./page-header.component.scss */ "./src/app/shared/modules/page-header/page-header.component.scss")).default]
    })
], PageHeaderComponent);



/***/ }),

/***/ "./src/app/shared/modules/page-header/page-header.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/modules/page-header/page-header.module.ts ***!
  \******************************************************************/
/*! exports provided: PageHeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderModule", function() { return PageHeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _page_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-header.component */ "./src/app/shared/modules/page-header/page-header.component.ts");





let PageHeaderModule = class PageHeaderModule {
};
PageHeaderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        declarations: [_page_header_component__WEBPACK_IMPORTED_MODULE_4__["PageHeaderComponent"]],
        exports: [_page_header_component__WEBPACK_IMPORTED_MODULE_4__["PageHeaderComponent"]]
    })
], PageHeaderModule);



/***/ }),

/***/ "./src/app/shared/modules/stat/stat.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/shared/modules/stat/stat.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2R1bGVzL3N0YXQvc3RhdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/modules/stat/stat.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/modules/stat/stat.component.ts ***!
  \*******************************************************/
/*! exports provided: StatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatComponent", function() { return StatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let StatComponent = class StatComponent {
    constructor() {
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StatComponent.prototype, "bgClass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StatComponent.prototype, "icon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StatComponent.prototype, "count", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StatComponent.prototype, "label", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StatComponent.prototype, "data", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], StatComponent.prototype, "event", void 0);
StatComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stat',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./stat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/stat/stat.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./stat.component.scss */ "./src/app/shared/modules/stat/stat.component.scss")).default]
    })
], StatComponent);



/***/ }),

/***/ "./src/app/shared/modules/stat/stat.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/modules/stat/stat.module.ts ***!
  \****************************************************/
/*! exports provided: StatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatModule", function() { return StatModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _stat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stat.component */ "./src/app/shared/modules/stat/stat.component.ts");




let StatModule = class StatModule {
};
StatModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: [_stat_component__WEBPACK_IMPORTED_MODULE_3__["StatComponent"]],
        exports: [_stat_component__WEBPACK_IMPORTED_MODULE_3__["StatComponent"]]
    })
], StatModule);



/***/ }),

/***/ "./src/app/shared/pipes/shared-pipes.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/pipes/shared-pipes.module.ts ***!
  \*****************************************************/
/*! exports provided: SharedPipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedPipesModule", function() { return SharedPipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let SharedPipesModule = class SharedPipesModule {
};
SharedPipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: []
    })
], SharedPipesModule);



/***/ }),

/***/ "./src/app/shared/services/api.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/services/api.service.ts ***!
  \************************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jwt.service */ "./src/app/shared/services/jwt.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









let ApiService = class ApiService {
    constructor(http, jwtService, toastr, router) {
        this.http = http;
        this.jwtService = jwtService;
        this.toastr = toastr;
        this.router = router;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({ name: 'Admin' });
        this.updateRoute = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.myUser = this.user.asObservable();
        this.myUpdateRoute = this.updateRoute.asObservable();
    }
    getUserData() {
        return this.user.asObservable();
    }
    sendUserData(data) {
        this.user.next(data);
    }
    getRouteUpdate() {
        return this.updateRoute.asObservable();
    }
    sendRouteUpdate(data) {
        this.updateRoute.next(data);
    }
    sendError(err) {
        this.toastr.error(err);
    }
    formatErrors(error) {
        console.log(error, 'err got here ++++');
        let errorText = '';
        if (error.error && error.error.error) {
            console.log(error.error);
            errorText = error.error.error;
        }
        else if (error.statusText === 'Unknown Error' || error.statusText === 'Not Found') {
            errorText = 'Something went wrong try again';
        }
        if (error.status === 401) {
            errorText = 'Session expire, Please login again.';
        }
        this.sendError(errorText);
        if (error.status === 401) {
            this.jwtService.logoutUser();
            this.router.navigate(['/login']);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.error);
    }
    setHeaders(headers = {}) {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"](headers);
    }
    get(path, headers = {}) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url}${path}`, { headers: this.setHeaders(headers) })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])((err) => this.formatErrors(err)));
    }
    put(path, body = {}, headers = {}) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url}${path}`, body, { headers: this.setHeaders(headers) }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])((err) => this.formatErrors(err)));
    }
    post(path, body = {}) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url}${path}`, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])((err) => this.formatErrors(err)));
    }
    delete(path) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url}${path}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])((err) => this.formatErrors(err)));
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _jwt_service__WEBPACK_IMPORTED_MODULE_6__["JwtService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ "./src/app/shared/services/index.ts":
/*!******************************************!*\
  !*** ./src/app/shared/services/index.ts ***!
  \******************************************/
/*! exports provided: JwtService, ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jwt.service */ "./src/app/shared/services/jwt.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return _jwt_service__WEBPACK_IMPORTED_MODULE_0__["JwtService"]; });

/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/shared/services/api.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]; });





/***/ }),

/***/ "./src/app/shared/services/jwt.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/services/jwt.service.ts ***!
  \************************************************/
/*! exports provided: JwtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return JwtService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let JwtService = class JwtService {
    constructor() { }
    getToken() {
        return window.localStorage['token'];
    }
    saveToken(token, role) {
        window.localStorage['token'] = token;
        window.localStorage['role'] = role;
    }
    setIsLogin() {
        localStorage.setItem('isLoggedin', 'true');
    }
    destroyToken() {
        window.localStorage.removeItem('token');
    }
    logoutUser() {
        this.destroyToken();
        localStorage.removeItem('isLoggedin');
    }
};
JwtService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], JwtService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    //api_url: 'http://localhost:6042',
    // production: true,
    // api_url: 'http://54.190.192.105:6042',
    //api_url: 'http://localhost:8080/v1',
    api_url: 'http://15.207.82.242/v1',
    language: [
        { 'name': 'English', 'id': 'en' },
        { 'name': 'Spanish', 'id': 'es' },
        { 'name': 'Portuguese', 'id': 'pt' },
        { 'name': 'Russian', 'id': 'ru' }
    ],
    AwsConfig: {
        AWS_SECRET_ACCESS: 'IleqXwsdsMh3Xxqokp7ZnVVUIP3IAAwPXqCvw4Tz',
        AWS_ACCESS_KEY: 'AKIAJZB4CFVV5DYKBY4A',
        AWS_REGION: 'us-east-1',
        AWS_BUCKET: 'dezerland',
        AWS_ACL: 'public-read'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\shivendra\gweb\web\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map