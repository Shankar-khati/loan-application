import { Component, OnInit } from '@angular/core';
import { AnimateChildOptions } from '@angular/animations';
import { EmailPanelServiceService } from '../email-panel-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sendemail',
  templateUrl: './sendemail.component.html',
  styleUrls: ['./sendemail.component.css']
})
export class SendemailComponent implements OnInit {

  Recievers:any = [
    {'id':'1','name':"English"},
    {'id':'2', 'name':"Hindi"},
    {'id':'3', 'name':"Urdu"},
    {'id':'4', 'name':"Franch"}
    ];


    Reciever:any="string";
    Subject:any="";
    Message:any="";

  constructor(
    private service: EmailPanelServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private tost: ToastrService
  ) { }

  ngOnInit(): void {

    this.Recievers =  [
      {'id':'1','name':"English"},
      {'id':'2', 'name':"Hindi"},
      {'id':'3', 'name':"Urdu"},
      {'id':'4', 'name':"Franch"}
      ];
      
  }
  getReciever(e){
    console.log(e)
    this.Reciever = e;
   } 


   onSend(){
     console.log(this.Reciever);
     console.log(this.Subject);
     console.log(this.Message);

     let data = {
      "reciver" : this.Reciever,
      "subject" : this.Subject,
      "message" : this.Message,
      "senderid":"text@gmail.com",
      "reciverid":"test@gmail.com",
     }
     console.log(data);
     this.service.createemailPanel(data).subscribe(
      res => {
        console.log(res)
        // this.disableSubmit = false;
         this.tost.success("EmailPanel created succesfully");
         this.router.navigate(['/email-panel/list-email']);
      }, () => {
        //this.disableSubmit = false;
      });
  }
   

   onReset(){
    this.Reciever = "";
    this.Subject = "";
    this.Message = "";
   }
 

}


