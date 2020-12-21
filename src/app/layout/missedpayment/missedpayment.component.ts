import { Component, OnInit, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-missedpayment',
  templateUrl: './missedpayment.component.html',
  styleUrls: ['./missedpayment.component.css']
})
export class MissedpaymentComponent implements OnInit {
  misseddata:any;
  constructor() { }
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
    this.misseddata = [
      {"KindofLoan":"Paid", "Account":"saving","Descriptions":"Hii all is well", "Amount":"40000","Balance":"300000","Customer":"ajay","Agent":"shubham","ApproveBy":"State goverment","DateRelease":"12/08/2019","PaymentDate":"18/07/2020","ApproveStatus":"valid"},      
    ]
  }

}
