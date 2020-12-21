import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-depositmoney',
  templateUrl: './depositmoney.component.html',
  styleUrls: ['./depositmoney.component.css']
})
export class DepositmoneyComponent implements OnInit {
  SelectAccount:any;
  AmountDeposit:any;
  SelectAccounts:any = [
    {'id':'1','name':"000000"},
    {'id':'2', 'name':"2355"},
    {'id':'3', 'name':"23457"},
    {'id':'4', 'name':"577555"}
    ];
  constructor() { }

  ngOnInit(): void {

    this.SelectAccounts = [
      {'id':'1','name':"000000"},
      {'id':'2', 'name':"2355"},
      {'id':'3', 'name':"23457"},
      {'id':'4', 'name':"577555"}
      ];
  }
  getSelectAccount(e){
    console.log(e)
    this.SelectAccount = e;
  }

  onDeposit(){
    console.log(this.SelectAccount);
    console.log(this.AmountDeposit);


    let data = {
      "SelectAccount" : this.SelectAccount,
      "AmountDeposit" : this.AmountDeposit,
    }
    console.log(data);
  }
  onReset(){
    this.SelectAccount ="",
    this.AmountDeposit=""
  }
}
