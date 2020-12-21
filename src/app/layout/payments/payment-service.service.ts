import { Injectable } from '@angular/core';
import { environment as env } from "../../../environments/environment";
import { ApiService } from '../../shared';

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {

  constructor(private apiService: ApiService) { }
  getPayment() {
    return this.apiService.get(`/payments`);
  }

  createPayment(data) {
    return this.apiService.post(`/payments`, data);
  }
}
