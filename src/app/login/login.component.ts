import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApisService } from './service/api.service';
import { ApiService, JwtService } from '../shared';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    forgotPasswordForm: FormGroup;
    FormSubmitted = false;
    disableSubmit: Boolean = false;
    FormSubmitted1 = false;
    disableSubmit1: Boolean = false;
    resetPassword = false;
    constructor(public router: Router,
        private fb: FormBuilder,
        private Toastr: ToastrService,
        private apiService: ApisService,
        private jwtService: JwtService) {
        this.loginForm = fb.group({
            'userEmail': ['', [
                Validators.required
            ]],
            'userPassword': ['', [
                Validators.required
            ]]
        });
        this.forgotPasswordForm = fb.group({
            'userEmail': ['', [
                Validators.required
            ]]
        });
    }
    ngOnInit() { }
    resetPasswordScreen() {
        this.resetPassword = !this.resetPassword;
    }
    onLoggedIn() {
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
            this.apiService.loginStaff(this.loginForm.value).subscribe(
                res => {
                    console.log(res)
                    this.disableSubmit = false;
                    this.Toastr.success("Login Successfully");
                    this.jwtService.saveToken(res.token, res.user.userRole);
                    this.jwtService.setIsLogin();
                    this.router.navigate(['/dashboard']);
                }, () => {
                    setTimeout(() => {
                        this.disableSubmit = false;
                    }, 1000);
                });
        }
    }
    forgotPasswordFun() {
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
            this.apiService.forgotPassword(this.forgotPasswordForm.value.email).subscribe(
                res => {
                    this.disableSubmit1 = false;
                    this.Toastr.success(res.message);
                    this.resetPassword = false;
                }, () => {
                    setTimeout(() => {
                        this.disableSubmit1 = false;
                    }, 1000);
                });
        }
    }
}
