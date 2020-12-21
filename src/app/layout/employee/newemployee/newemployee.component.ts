import { Component, OnInit } from '@angular/core';
import { AnimateChildOptions } from '@angular/animations';
import { EmployeeServiceService  } from '../employee-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.css']
})
export class NewemployeeComponent implements OnInit {

    Borrowers:any = [
      {'id':'1','name':"Ajay"},
      {'id':'2', 'name':"Shubham"},
      {'id':'3', 'name':"Ankit"},
      {'id':'4', 'name':"Kuldeep"}
      ];
      Countrys:any = [
        {'id':'1','name':"India"},
        {'id':'2', 'name':"Usa"},
        {'id':'3', 'name':"Russia"},
        {'id':'4', 'name':"Singapur"}
        ];
    ConfirmPassword:any;
    Password:any;
    username:any;
    Country:any="";
    
    Borrower:any="";
    imagename:any;
    firstname:any;
    emailname:string;
    phone:any;
    textarea:any;
    textarea1:any;
    cityname:any;
    statename:any;
    zipcode:any;
    comment:any;
    name:any;
    
  constructor(
    private service: EmployeeServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private tost: ToastrService
  ) { }
 
  ngOnInit(): void {
    
     this.Borrowers = [
      {'id':'1','name':"Ajay"},
      {'id':'2', 'name':"Shubham"},
      {'id':'3', 'name':"Ankit"},
      {'id':'4', 'name':"Kuldeep"}
      ];
      this.Countrys = [
        {'id':'1','name':"India"},
        {'id':'2', 'name':"Usa"},
        {'id':'3', 'name':"Russia"},
        {'id':'4', 'name':"Singapur"}
        ];
  }
  
  getCountry(e){
    console.log(e)
    this.Country = e;
  }
 
  getBorrower(e){
    console.log(e)
   this.Borrower = e;

  }
  
 
  
  
 
 
  onSave(){
    console.log(this.imagename)
    
    console.log(this.firstname)
    console.log(this.emailname)
    console.log(this.phone)
    console.log(this.textarea)
    console.log(this.textarea1)
    console.log(this.cityname)
    console.log(this.statename)
    console.log(this.zipcode)
    console.log(this.Borrower)
    console.log(this.Country)
    console.log(this.comment)
    console.log(this.username)
    console.log(this.Password)
    console.log(this.ConfirmPassword)


    let data = {
      "confirmPassword" : this.ConfirmPassword,
      "password" : this.Password,
      "username" : this.username,
      "comment" : this.comment,
      "imagename" : this.imagename,
      
      "borrower" : this.Borrower,
      "Country" : this.Country,
      "firstname" : this.firstname,
      "emailname" : this.emailname,
      "phone" : this.phone,
      "textarea" : this.textarea,
      "textarea1" : this.textarea1,
      "cityname" : this.cityname,
      "statename" : this.statename,
      "zipcode" : this.zipcode

      
    }
    console.log(data)

    this.service.createemployee(data).subscribe(
      res => {
        console.log(res)
        // this.disableSubmit = false;
         this.tost.success("Employee created succesfully");
         this.router.navigate(['/employee/list']);
      }, () => {
        //this.disableSubmit = false;
      });
  }
  
  onReset(){
    
       this.ConfirmPassword = "",
       this.Password = "",
       this.username ="",
       this.comment= "",
       this.imagename= "",
       
       this.Borrower="",
       this.Country="",
       this.firstname="",
       this.emailname="",
       this.phone="",
       this.textarea="",
       this.textarea1="",
       this.cityname="",
       this.statename="",
      this.zipcode=""
  }
      
  }


