import { Component, OnInit, ViewChildren } from '@angular/core';
import {MessageServiceService } from '../message-service.service';

@Component({
  selector: 'app-outbox',
  templateUrl: './outbox.component.html',
  styleUrls: ['./outbox.component.css']
})
export class OutboxComponent implements OnInit {
  outboxdata:any;
  constructor(public service: MessageServiceService) { }
  @ViewChildren('myItem') item;
selectedIds = [];

  OnCheckboxSelect(id, event) {
    if (event.target.checked === true) {
      this.selectedIds.push({id: id, checked: event.target.checked});
      console.log('Selected Ids ', this.selectedIds);
    }
    if (event.target.checked === false) {
      this.selectedIds = this.selectedIds.filter((item) => item.id !== id);
      console.log('UnSelected Ids ', this.selectedIds);
    }
  }

  ngOnInit(): void {
    this.outboxdata = [
      {"id":"1","Subject":"Hindi", "SenderName":"Surendra","Date":"16/09/1960", "Action":""},
      {"id":"2","Subject":"English", "SenderName":"Ravi","Date":"18/09/1960", "Action":""},
      
    ]
  }
  getMessage(){
    this.service.getMessage().subscribe(
      res => {
        console.log(res)

        this.outboxdata = res['loan'];
        // this.disableSubmit = false;
        
      }, () => {
        //this.disableSubmit = false;
      });
  }
}
