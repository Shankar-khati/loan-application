(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modulepermission-modulepermission-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/modulepermission/addpermission/addpermission.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/modulepermission/addpermission/addpermission.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <div class=\"card-body\">\n\n        <div class=\"form-group\">\n            <label for=\"usr\">Name:</label>\n            <input name=\"reciever\" name=\"message\" [(ngModel)]=\"Reciever\" type=\"text\" class=\"form-control\" id=\"usr\">\n        </div>\n        <button type=\"button\" (click)=\"onSend()\" class=\"btn btn-primary\">ADD</button>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/modulepermission/modulepermission.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/modulepermission/modulepermission.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>modulepermission works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/modulepermission/permissionlist/permissionlist.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/modulepermission/permissionlist/permissionlist.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <div class=\"card-body\">\n\n        <!-- Begin Page Content -->\n        <div class=\"container-fluid\">\n\n            <!-- Page Heading -->\n            <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\n                <h1 class=\"h3 mb-0 text-gray-800 page-title\">Module Permission<span>Control Pannel</span></h1>\n                <ol class=\"breadcrumb text-xs bg-transparent\">\n                    <li><i class=\"fas fa-fw fa-tachometer-alt\"></i><a href=\"#\" class=\"text-gray-700\">Home</a><i class=\"fas fa-fw fa-angle-right\"></i></li>\n                    <li><a href=\"#\" class=\"text-gray-700\">Permission</a><i class=\"fas fa-fw fa-angle-right\"></i></li>\n                    <li class=\"active text-gray-500\">List</li>\n                </ol>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <!-- DataTales Example -->\n                    <div class=\"bg-white shadow border-top-green mb-4\">\n\n\n\n                        <form action=\"\" method=\"\">\n                            <div class=\"card-body\">\n                                <div class=\"mb-2\">\n                                    <button type=\"button\" class=\"btn btn-warning btn-sm\" routerLink=\"/dashboard\"><i class=\"fa fa-reply-all pr-2\" aria-hidden=\"true\"></i>Back</button>\n\n                                </div>\n                                <hr class=\"mp-4 mt-4\">\n                                <div class=\"form-group pt-3\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-2 text-center text-green\"><label>User Name:</label></div>\n                                        <div class=\"col-lg-10 \">\n                                            <select class=\"form-control form-control-user\" name=\"username\" [(ngModel)]=\"UserName\" (change)=\"getUserName($event.target.value)\">\n                                  <option  *ngFor=\"let ln of UserNames\" [value]=\"ln.id\">{{ln.name}}</option>\n                                  \n                              </select>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"table-responsive mt-4\">\n                                    <table class=\"table text-center\" width=\"100%\" cellspacing=\"0\">\n                                        <thead>\n                                            <tr>\n                                                <th>S/No</th>\n                                                <th>Module Name</th>\n                                                <th>Create</th>\n                                                <th>Read</th>\n                                                <th>Update</th>\n                                                <th>Delete</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr *ngFor=\"let newdata of Modules\">\n                                                <td>{{newdata.id}}</td>\n                                                <td> {{newdata.name}}</td>\n                                                <td><input type=\"checkbox\" #myItem (change)=\"OnCheckboxSelect(newdata, $event)\" name=\"item-{{newdata.id}}\" /></td>\n                                                <td><input type=\"checkbox\" #myItem (change)=\"OnCheckboxSelect(newdata, $event)\" name=\"item-{{newdata.id}}\" /></td>\n                                                <td><input type=\"checkbox\" #myItem (change)=\"OnCheckboxSelect(newdata, $event)\" name=\"item-{{newdata.id}}\" /></td>\n                                                <td><input type=\"checkbox\" #myItem (change)=\"OnCheckboxSelect(newdata, $event)\" name=\"item-{{newdata.id}}\" /></td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n\n\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-lg-12 text-right  pb-3\">\n                                        <hr class=\"mp-4 mt-4\">\n\n                                        <button type=\"button\" (click)=\"onSave()\" class=\"btn btn-success btn-sm\"><i class=\"fa fa-save pr-2\" aria-hidden=\"true\"></i>Save Module</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </form>\n\n\n\n\n                    </div>\n\n\n                </div>\n            </div>\n\n\n\n\n\n\n        </div>\n        <!-- /.container-fluid -->\n\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/layout/modulepermission/addpermission/addpermission.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/modulepermission/addpermission/addpermission.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9tb2R1bGVwZXJtaXNzaW9uL2FkZHBlcm1pc3Npb24vYWRkcGVybWlzc2lvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/layout/modulepermission/addpermission/addpermission.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/modulepermission/addpermission/addpermission.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AddpermissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddpermissionComponent", function() { return AddpermissionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AddpermissionComponent = class AddpermissionComponent {
    constructor() { }
    ngOnInit() {
    }
    onSend() {
        console.log(this.Reciever);
        let data = {
            "Reciever": this.Reciever,
        };
        console.log(data);
    }
};
AddpermissionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addpermission',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addpermission.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/modulepermission/addpermission/addpermission.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addpermission.component.css */ "./src/app/layout/modulepermission/addpermission/addpermission.component.css")).default]
    })
], AddpermissionComponent);



/***/ }),

/***/ "./src/app/layout/modulepermission/modulepermission-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/layout/modulepermission/modulepermission-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: ModulepermissionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulepermissionRoutingModule", function() { return ModulepermissionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modulepermission_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modulepermission.component */ "./src/app/layout/modulepermission/modulepermission.component.ts");
/* harmony import */ var _addpermission_addpermission_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addpermission/addpermission.component */ "./src/app/layout/modulepermission/addpermission/addpermission.component.ts");
/* harmony import */ var _permissionlist_permissionlist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./permissionlist/permissionlist.component */ "./src/app/layout/modulepermission/permissionlist/permissionlist.component.ts");






const routes = [
    { path: '', component: _modulepermission_component__WEBPACK_IMPORTED_MODULE_3__["ModulepermissionComponent"] },
    { path: 'add',
        data: {
            breadcrumb: 'Add Module Permission'
        },
        component: _addpermission_addpermission_component__WEBPACK_IMPORTED_MODULE_4__["AddpermissionComponent"] },
    { path: 'list',
        data: {
            breadcrumb: 'Module Permission List'
        },
        component: _permissionlist_permissionlist_component__WEBPACK_IMPORTED_MODULE_5__["PermissionlistComponent"] },
];
let ModulepermissionRoutingModule = class ModulepermissionRoutingModule {
};
ModulepermissionRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ModulepermissionRoutingModule);



/***/ }),

/***/ "./src/app/layout/modulepermission/modulepermission.component.css":
/*!************************************************************************!*\
  !*** ./src/app/layout/modulepermission/modulepermission.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9tb2R1bGVwZXJtaXNzaW9uL21vZHVsZXBlcm1pc3Npb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/layout/modulepermission/modulepermission.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/modulepermission/modulepermission.component.ts ***!
  \***********************************************************************/
/*! exports provided: ModulepermissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulepermissionComponent", function() { return ModulepermissionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ModulepermissionComponent = class ModulepermissionComponent {
    constructor() { }
    ngOnInit() {
    }
};
ModulepermissionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modulepermission',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modulepermission.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/modulepermission/modulepermission.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modulepermission.component.css */ "./src/app/layout/modulepermission/modulepermission.component.css")).default]
    })
], ModulepermissionComponent);



/***/ }),

/***/ "./src/app/layout/modulepermission/modulepermission.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/modulepermission/modulepermission.module.ts ***!
  \********************************************************************/
/*! exports provided: ModulepermissionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulepermissionModule", function() { return ModulepermissionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _modulepermission_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modulepermission-routing.module */ "./src/app/layout/modulepermission/modulepermission-routing.module.ts");
/* harmony import */ var _modulepermission_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modulepermission.component */ "./src/app/layout/modulepermission/modulepermission.component.ts");
/* harmony import */ var _addpermission_addpermission_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addpermission/addpermission.component */ "./src/app/layout/modulepermission/addpermission/addpermission.component.ts");
/* harmony import */ var _permissionlist_permissionlist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./permissionlist/permissionlist.component */ "./src/app/layout/modulepermission/permissionlist/permissionlist.component.ts");








let ModulepermissionModule = class ModulepermissionModule {
};
ModulepermissionModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_modulepermission_component__WEBPACK_IMPORTED_MODULE_5__["ModulepermissionComponent"], _addpermission_addpermission_component__WEBPACK_IMPORTED_MODULE_6__["AddpermissionComponent"], _permissionlist_permissionlist_component__WEBPACK_IMPORTED_MODULE_7__["PermissionlistComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _modulepermission_routing_module__WEBPACK_IMPORTED_MODULE_4__["ModulepermissionRoutingModule"]
        ]
    })
], ModulepermissionModule);



/***/ }),

/***/ "./src/app/layout/modulepermission/permissionlist/permissionlist.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/modulepermission/permissionlist/permissionlist.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9tb2R1bGVwZXJtaXNzaW9uL3Blcm1pc3Npb25saXN0L3Blcm1pc3Npb25saXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/layout/modulepermission/permissionlist/permissionlist.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/layout/modulepermission/permissionlist/permissionlist.component.ts ***!
  \************************************************************************************/
/*! exports provided: PermissionlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionlistComponent", function() { return PermissionlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PermissionlistComponent = class PermissionlistComponent {
    constructor() {
        this.UserNames = [
            { 'id': '1', 'name': "English" },
            { 'id': '2', 'name': "Hindi" },
            { 'id': '3', 'name': "Urdu" },
            { 'id': '4', 'name': "Franch" }
        ];
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
        this.UserNames = [
            { 'id': '1', 'name': "English" },
            { 'id': '2', 'name': "Hindi" },
            { 'id': '3', 'name': "Urdu" },
            { 'id': '4', 'name': "Franch" }
        ];
        this.Modules = [{ 'id': '1', 'name': "EmailPanel" },
            { 'id': '2', 'name': "BorrowerDetails" },
            { 'id': '3', 'name': "EmployeeDetails" },
            { 'id': '4', 'name': "LoanDetails" },
            { 'id': '5', 'name': "InternalMessage" },
            { 'id': '6', 'name': "MissedPayment" },
            { 'id': '7', 'name': "Payment" },
            { 'id': '8', 'name': "EmployeeDetails" },
            { 'id': '9', 'name': "ModulePermission" },
            { 'id': '10', 'name': "SavingAcoount" },
            { 'id': '11', 'name': "GeneralSettings" },
        ];
    }
    getUserName(e) {
        console.log(e);
        this.UserName = e;
    }
    onSave() {
        console.log(this.UserName);
        console.log(this.Modules);
        let data = {
            "UserName": this.UserName,
            "Modules": this.Modules,
        };
        console.log(data);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('myItem')
], PermissionlistComponent.prototype, "item", void 0);
PermissionlistComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-permissionlist',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./permissionlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/modulepermission/permissionlist/permissionlist.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./permissionlist.component.css */ "./src/app/layout/modulepermission/permissionlist/permissionlist.component.css")).default]
    })
], PermissionlistComponent);



/***/ })

}]);
//# sourceMappingURL=modulepermission-modulepermission-module-es2015.js.map