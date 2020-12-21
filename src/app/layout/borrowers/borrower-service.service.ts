import { Injectable } from '@angular/core';
import { environment as env } from "../../../environments/environment";
import { ApiService } from '../../shared';

@Injectable({
  providedIn: 'root'
})
export class BorrowerServiceService {

  constructor(private apiService: ApiService) { }

  getborrowers() {
    return this.apiService.get(`/borrowers`);
  } 
  getborrowersdetails(id) {
    return this.apiService.get(`/borrowers/`+id);
  } 
  
  updateborrowersdetails(id, data) {
    return this.apiService.put(`/borrowers/`+id, data);
  }

  createborrowers(data) {
    return this.apiService.post(`/borrowers`, data);
  } 
  deleteborrowers(id) {
    return this.apiService.delete(`/borrowers/`+id);
  }
}
