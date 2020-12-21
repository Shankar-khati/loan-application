import { Injectable } from '@angular/core';
import { environment as env } from "../../../environments/environment";
import { ApiService } from '../../shared';

@Injectable({
  providedIn: 'root'
})
export class EmailPanelServiceService {

  constructor(private apiService: ApiService) { }
  getemailPanel() {
    return this.apiService.get(`/emailPanel`);
  }

  createemailPanel(data) {
    return this.apiService.post(`/emailPanel`, data);
  }
}
