import { Component, OnInit } from '@angular/core';
import { AnimateChildOptions } from '@angular/animations';
import {PaymentServiceService  } from '../payment-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-newpayments',
  templateUrl: './newpayments.component.html',
  styleUrls: ['./newpayments.component.css']
})
export class NewpaymentsComponent implements OnInit {
  Account:any;
  Customer:any;
  CustomerAccount:any;
  Loan:any;
  date:any=" ";
  Teller:any=" ";
  Remarks:any;
  AmounttoPay:any;
  Customers:any = [
    {'id':'1','name':"ravi"},
    {'id':'2', 'name':"reema"},
    {'id':'3', 'name':"rupa"},
    {'id':'4', 'name':"rani"}
    ];

    CustomerAccounts:any = [
      {'id':'1','account':"445555"},
      {'id':'2', 'account':"333333"},
      {'id':'3', 'account':"677887"},
      {'id':'4', 'account':"23455566"}
      ];
      Loans:any = [
        {'id':'1','number':"113322"},
        {'id':'2', 'number':"45544"},
        {'id':'3', 'number':"5665"},
        {'id':'4', 'number':"dfff"}
        ];
  constructor(
    
    private service: PaymentServiceService ,
    private router: Router,
    private route: ActivatedRoute,
    private tost: ToastrService
  ) { }

  ngOnInit(): void {

    this.Customers = [
      {'id':'1','name':"ravi"},
      {'id':'2', 'name':"reema"},
      {'id':'3', 'name':"rupa"},
      {'id':'4', 'name':"rani"}
      ];

      this.CustomerAccounts = [
        {'id':'1','account':"445555"},
        {'id':'2', 'account':"333333"},
        {'id':'3', 'account':"677887"},
        {'id':'4', 'account':"23455566"}
      ];

      this.Loans = [
        {'id':'1','number':"113322"},
        {'id':'2', 'number':"45544"},
        {'id':'3', 'number':"5665"},
        {'id':'4', 'number':"dfff"}
        ];
    
  }
  getCustomer(e){
    console.log(e)
    this.Customer = e;
   } 

   getCustomerAccount(e){
    console.log(e)
    this.CustomerAccount = e;
   } 

   getLoan(e){
    console.log(e)
    this.Loan = e;
   } 

   


   MakePayment(){
     console.log(this.Account);
     console.log(this.Customer);
     console.log(this.CustomerAccount);
     console.log(this.Loan);
     console.log(this.date);
     console.log(this.AmounttoPay);
     console.log(this.Teller);
     console.log(this.Remarks);

     let data = {
       "Account":this.Account,
       "Customer":this.Customer,
       "CustomerAccount":this.CustomerAccount,
       "Loan": this.Loan,
       "date":this.date,
       "AmounttoPay":this.AmounttoPay,
       "Remarks":this.Remarks,
       "Teller":this.Teller

     }
     console.log(data)

     this.service.createPayment(data).subscribe(
      res => {
        console.log(res)
        // this.disableSubmit = false;
         this.tost.success("Payment created succesfully");
         this.router.navigate(['/payments/list']);
      }, () => {
        //this.disableSubmit = false;
      });

   

   }
   onReset(){
     this.Account="";
     this.Customer="";
     this.CustomerAccount="";
     this.Loan="";
     this.AmounttoPay="";
     this.date="";
     this.Teller="";
     this.Remarks="";
   }

}
