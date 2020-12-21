import { Injectable } from '@angular/core';
import { environment as env } from "../../../environments/environment";
import { ApiService } from '../../shared';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private apiService: ApiService) { }
  getemployee() {
    return this.apiService.get(`/employee`);
  }

  createemployee(data) {
    return this.apiService.post(`/employee`, data);
  }

}
