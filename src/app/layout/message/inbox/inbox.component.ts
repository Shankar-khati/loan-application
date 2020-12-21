import { Component, OnInit, ViewChildren } from '@angular/core';
import {MessageServiceService } from '../message-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  inboxdata:any;
  constructor(
    public service: MessageServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private tost: ToastrService
    ) { }
   
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
   this.getMessage();

    this.inboxdata = [
      {"subject":"Hindi", "senderName":"Surendra","date":"16/09/1960", "Action":"view"},
      {"subject":"English", "senderName":"Ravi","Date":"18/09/1960", "Action":"view2"},
      
    ]
  }
  getMessage(){
    this.service.getMessage().subscribe(
      res => {
        console.log(res)

        this.inboxdata = res['message'];
        // this.disableSubmit = false;
       // this.router.navigate(['/message/outbox']);
      }, () => {
        //this.disableSubmit = false;
      });
  }

}
