import { Component, OnInit, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-mywallet',
  templateUrl: './mywallet.component.html',
  styleUrls: ['./mywallet.component.css']
})
export class MywalletComponent implements OnInit {

  walletdata:any;
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

    this.walletdata = [
      {"id":"1", "Amount":"40000","Descriptions":"Hii all is well", "WalletType":"fix","TransactionDate":"16/09/2020","Action":"Delete"},
      {"id":"2", "Amount":"50000","Descriptions":"Hii all is not well", "WalletType":"Notfix","TransactionDate":"16/12/2020","Action":"Delete2"},
     
     
    ]
  }

}
