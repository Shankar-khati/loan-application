import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from './service.service';
import { ApiService, JwtService } from '../shared';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  FormSubmitted = false;
  disableSubmit: Boolean = false;
  user: String;
  email: String;
  key: String;
  constructor(public router: Router,
    private fb: FormBuilder,
    private Toastr: ToastrService,
    private apiService: ServiceService,
    private jwtService: JwtService,
    private activatedRoute: ActivatedRoute) {
    this.resetPasswordForm = fb.group({
      'password': [null, [
        Validators.required, Validators.minLength(6)
      ]],
      'cPassword': [null, [
        Validators.required
      ]]
    }, { validator: this.passwordMatchValidator });
  }
  passwordMatchValidator(formGroup: FormGroup) {
    return formGroup.get('password').value === formGroup.get('cPassword').value
      ? null : { 'mismatch': true };
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.user = params.user;
      this.email = params.email;
      this.key = params.key;
    });
  }

  resetPassword() {
    if (this.disableSubmit) {
      return;
    }
    this.FormSubmitted = true;
    this.disableSubmit = true;
    if (!this.resetPasswordForm.valid) {
      this.disableSubmit = false;
      return;
    } else {
      if (!this.user
        || !this.email
        || !this.key) {
        this.Toastr.error('Password reset link expired.');
        return;
      }
      this.apiService.resetPassword(Object.assign(this.resetPasswordForm.value, {
        user: this.user,
        email: this.email,
        key: this.key
      })).subscribe(
        res => {
          this.disableSubmit = false;
          this.Toastr.success(res.message);
          this.resetPasswordForm.reset();
        }, () => {
          setTimeout(() => {
            this.disableSubmit = false;
          }, 1000);
        });
    }
  }

}
