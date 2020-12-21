import { Injectable } from '@angular/core';
import { environment as env } from "../../../environments/environment";
import { ApiService } from '../../shared';


@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  constructor(private apiService: ApiService) { }

  getMessage() {
    return this.apiService.get(`/message`);
  }

  createMessage(data) {
    return this.apiService.post(`/message`, data);
  }
}
