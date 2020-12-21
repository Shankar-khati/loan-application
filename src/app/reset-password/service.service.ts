import { Injectable } from '@angular/core';
import { ApiService } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private apiService: ApiService) { }
  resetPassword(data) {
    return this.apiService.post(`/resetPassword`, data);
  }
}
