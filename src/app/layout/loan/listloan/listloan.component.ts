import { Component, OnInit, ViewChildren } from '@angular/core';
import {LoanServiceService } from '../loan-service.service';

@Component({

  selector: 'app-listloan',
  templateUrl: './listloan.component.html',
  styleUrls: ['./listloan.component.css']
})
export class ListloanComponent implements OnInit {
  
  loandata:any;
  constructor(
    public service: LoanServiceService
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
    this.getloans();
    this.loandata = [
      {"KindofLoan":"Paid", "account":"saving","description":"Hii all is well", "amount":"40000","balance":"300000","customer":"ajay","agent":"shubham","approveBy":"State goverment","dateRelease":"12/08/2019","paymentDate":"18/07/2020","approveStatus":"valid"},
      
    ]
  }
  getloans(){
    this.service.getloans().subscribe(
      res => {
        console.log(res)

        this.loandata = res['loan'];
        // this.disableSubmit = false;
         
      }, () => {
        //this.disableSubmit = false;
      });
  }


}
