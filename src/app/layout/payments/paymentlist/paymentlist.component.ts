import { Component, OnInit, ViewChildren } from '@angular/core';
import {PaymentServiceService } from '../payment-service.service';

@Component({
  selector: 'app-paymentlist',
  templateUrl: './paymentlist.component.html',
  styleUrls: ['./paymentlist.component.css']
})
export class PaymentlistComponent implements OnInit {
  Paymentdata:any;
  constructor( public service: PaymentServiceService) { }
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
    this.getPayment();

    this.Paymentdata = [
      {"id":"1", "Customer":"Ajay","Loan":"saving", "Balance":"400000","AmounttoPay":"30000000","date":"12/09/2014","Teller":"sddd","Actions":"view"},
      
    ]
    
  }

  getPayment(){
    this.service.getPayment().subscribe(
      res => {
        console.log(res)

        this.Paymentdata = res['payments'];
        // this.disableSubmit = false;
         
      }, () => {
        //this.disableSubmit = false;
      });
  }
}
