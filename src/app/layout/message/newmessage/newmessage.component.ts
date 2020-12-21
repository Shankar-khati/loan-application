import { Component, OnInit } from '@angular/core';
import { AnimateChildOptions } from '@angular/animations';
import {MessageServiceService  } from '../message-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-newmessage',
  templateUrl: './newmessage.component.html',
  styleUrls: ['./newmessage.component.css']
})
export class NewmessageComponent implements OnInit {

  Employees:any = [
    {'id':'1','name':"Ajay"},
    {'id':'2', 'name':"Shubham"},
    {'id':'3', 'name':"Ankit"},
    {'id':'4', 'name':"Rahul"}
    ];

    Employee:any;
    Subject:any;
    Description:any;

  constructor(
    private service: MessageServiceService ,
    private router: Router,
    private route: ActivatedRoute,
    private tost: ToastrService) { }

  ngOnInit(): void {
    this.Employees = [
      {'id':'1','name':"Ajay"},
      {'id':'2', 'name':"Shubham"},
      {'id':'3', 'name':"Ankit"},
      {'id':'4', 'name':"Rahul"}
      ];
  }
  getEmployee(e){
    console.log(e)
    this.Employee = e;
   } 

   onSend(){
    console.log(this.Employee);
    console.log(this.Subject);
    console.log(this.Description);

    let data = {
      "employee" : this.Employee,
      "subject" : this.Subject,
      "description" : this.Description,
      "date" : new Date(),
      "senderName":"Admin"
    }
    console.log(data);


    this.service.createMessage(data).subscribe(
      res => {
        console.log(res)
        // this.disableSubmit = false;
         this.tost.success("Message created succesfully");
         this.router.navigate(['/message/inbox']);
      }, () => {
        //this.disableSubmit = false;
      });
}

   

   onReset(){
    this.Employee = "";
    this.Subject = "";
    this.Description = "";
   }

}
