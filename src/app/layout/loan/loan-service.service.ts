import { Injectable } from '@angular/core';
import { environment as env } from "../../../environments/environment";
import { ApiService } from '../../shared';


@Injectable({
  providedIn: 'root'
})
export class LoanServiceService {

  constructor(private apiService: ApiService) { }

  getloans() {
    return this.apiService.get(`/loans`);
  }

  createloans(data) {
    return this.apiService.post(`/loans`, data);
  }
}
