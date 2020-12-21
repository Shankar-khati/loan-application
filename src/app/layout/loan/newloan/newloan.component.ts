import { Component, OnInit } from '@angular/core';
import { AnimateChildOptions } from '@angular/animations';
import {LoanServiceService  } from '../loan-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-newloan',
  templateUrl: './newloan.component.html',
  styleUrls: ['./newloan.component.css']
})
export class NewloanComponent implements OnInit {
  model: NgbDateStruct;

  Borrowers:any = [
    {'id':'1','name':"English"},
    {'id':'2', 'name':"Hindi"},
    {'id':'3', 'name':"Urdu"},
    {'id':'4', 'name':"Franch"}
    ];

    Accounts:any = [
      {'id':'1','name':"00000000"},
      {'id':'2', 'name':"234445578"},
      {'id':'3', 'name':"78999900"},
      {'id':'4', 'name':"6688989"}
      ];

    Account:any="";
    Description:any="";
    Amount:any="";
    Release:any;
    Address:any;
    Agent:any;
    Passport:any;
    Realationship:any;
    Balance:any;
    Status:any;
    AmounttoPay:any;
    Guarantor:any;
    Remarks:any;
    TellerBy:any;
    Remarksid:any;
    PhoneNumber:any;
    PaymentDate:any;
    Email:any;
    Borrower:any="string";
  constructor(
    private service: LoanServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private tost: ToastrService
  ) { }

  ngOnInit(): void {
    this.Borrowers =  [
      {'id':'1','name':"English"},
      {'id':'2', 'name':"Hindi"},
      {'id':'3', 'name':"Urdu"},
      {'id':'4', 'name':"Franch"}
      ];
      this.Accounts = [
        {'id':'1','name':"00000000"},
        {'id':'2', 'name':"234445578"},
        {'id':'3', 'name':"78999900"},
        {'id':'4', 'name':"6688989"}
        ];
  }
  getBorrower(e){
    console.log(e)
    this.Borrower = e;
   } 

   getAccount(e){
    console.log(e)
    this.Account = e;
   } 

   onSend(){
    console.log(this.Borrower);
    console.log(this.Account);
    console.log(this.Amount);
    console.log(this.Description);
    console.log(this.Email);
    console.log(this.Release);
    console.log(this.Status);
    console.log(this.Agent);
    console.log(this.Passport);
    console.log(this.Realationship);
    console.log(this.Guarantor);
    console.log(this.Remarks);
    console.log(this.PhoneNumber);
    console.log(this.Address);
    console.log(this.Balance);
    console.log(this.PaymentDate);
    console.log(this.AmounttoPay);
    console.log(this.TellerBy);
    console.log(this.Remarksid);






    let data = {
      "borrower" : this.Borrower,
      "remarksid" : this.Remarksid,
      "status" : this.Status,
      "tellerBy" : this.TellerBy,
      "amounttoPay" : this.AmounttoPay,
      "balance" : this.Balance,
      "paymentDate" : this.PaymentDate,
      "remarks" : this.Remarks,
      "account" : this.Account,
      "amount" : this.Amount,
      "phoneNumber" : this.PhoneNumber,
      "address" : this.Address,
      "description" : this.Description,
      "email" : this.Email,
      "release" : this.Release,
      "agent" : this.Agent,
      "passport" : this.Passport,
      "realationship" : this.Realationship,
      "guarantor" : this.Guarantor
    }

    console.log(data)

    this.service.createloans(data).subscribe(
      res => {
        console.log(res)
        // this.disableSubmit = false;
         this.tost.success("Loans created succesfully");
         this.router.navigate(['/loan/list']);
      }, () => {
        //this.disableSubmit = false;
      });
  }
   
   

   onReset(){
     this.Borrower="",
     this.Remarksid = "",
     this.Status = "",
     this.TellerBy = "",
     this.AmounttoPay ="",
     this.Balance = "",
    this.PaymentDate ="",
    this.Remarks ="",
    this.Account ="",
     this.Amount ="",
    this.PhoneNumber = "",
     this.Address = "",
     this.Description = "",
   this.Email = "",
     this.Release = "",
    this.Agent = "",
     this.Passport = "",
   this.Realationship = "",
     this.Guarantor = ""

   }

}
