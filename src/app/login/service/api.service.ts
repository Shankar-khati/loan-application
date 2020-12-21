import { Injectable } from '@angular/core';
import { ApiService } from '../../shared';

@Injectable({
  providedIn: 'root'
})
export class ApisService {
  

  constructor(private apiService: ApiService) { }
  loginStaff(data) {
    return this.apiService.post(`/users/login`, data);
  }
  forgotPassword(email) {
    return this.apiService.get(`/forgotPassword?email=${email}&user=staff`);
  }
}
