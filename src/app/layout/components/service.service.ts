import { Injectable } from '@angular/core';
import { ApiService } from '../../shared';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private apiService: ApiService) { }
  getStaffBySlug(slug) {
    return this.apiService.get(`/getStaffBySlug?slug=${slug}`);
  }
  getRoleById(_id) {
    return this.apiService.get(`/getRoleById?_id=${_id}`);
  }
  getStaffNotification() {
    return this.apiService.get('/getStaffNotification');
  }
}
