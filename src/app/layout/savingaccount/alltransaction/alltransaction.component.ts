import { Component, OnInit, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-alltransaction',
  templateUrl: './alltransaction.component.html',
  styleUrls: ['./alltransaction.component.css']
})
export class AlltransactionComponent implements OnInit {
  transactions:any;
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
    this.transactions=[{'TaxId':'1','T_Type':"Deposit",'AcctNo':"4546678755",'FName':"gdd","LName":"chaudhary",'Email':"hbtisurendra@gmail.com",'Phone':"9648142095",'Amount':"2334434","Date/Time":"13/04/2015","Action":"Review"},
    {'TaxId':'2','T_Type':"NoDeposit",'AcctNo':"12365432",'FName':"asddd","LName":"verma",'Email':"hbtisurendra@gmail2.com",'Phone':"959596666",'Amount':"34333","Date/Time":"20/04/2015","Action":"Review"},
   
   
    ]
  }

}
