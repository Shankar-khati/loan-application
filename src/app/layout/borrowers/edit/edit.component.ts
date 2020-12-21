import { Component, OnInit } from '@angular/core';
import { AnimateChildOptions } from '@angular/animations';
import { BorrowerServiceService } from '../borrower-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  imagename:any="";
  account:any=" ";
  firstname:any = " ";
  lastname:any="";
  emailname:any="";
  phone:any="";
  textarea:any="";
  textarea1:any="";
  cityname:any="";
  statename:any="";
  zipcode:any="";
  Country:any="";
  comment:any="";
  bid: any;

  constructor(private service: BorrowerServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private tost: ToastrService )  { }
    
    ngOnInit(): void {
      console.log(this.route.snapshot.params['id']);
     this.bid = this.route.snapshot.params['id'];
      this.getborrowers(this.bid);
     
    }
     afuConfig = {
        uploadAPI: {
          url:"https://example-file-upload-api"
        }
    };
    getborrowers(id){
      
    this.service.getborrowersdetails(id).subscribe(
      res => {
        console.log(res)
        this.account = res.borrowers.account;
        this.cityname = res.borrowers.cityname;
        this.emailname = res.borrowers.emailname;
        this.firstname = res.borrowers.firstname;
        this.lastname = res.borrowers.lastname;
       // this.imagename = res.borrowers.imagename;
        this.phone = res.borrowers.phone;
        this.statename = res.borrowers.statename;
        this.textarea = res.borrowers.textarea;
        this.textarea1 = res.borrowers.textarea1;
        this.zipcode = res.borrowers.zipcode;
        // this.disableSubmit = false;
         
      }, () => {
        //this.disableSubmit = false;
      });
  }

   
  onUpdate(){
    console.log(this.imagename);
    console.log(this.account);
    console.log(this.firstname);
    console.log(this.lastname);
    console.log(this.phone);
    console.log(this.emailname);
    
    console.log(this.textarea);
    console.log(this.textarea1);
    console.log(this.cityname);
    console.log(this.statename);
    console.log(this.zipcode);
    console.log(this.Country);
    console.log(this.comment);
    

    let data={
      "imagename" : this.imagename,
      "account" : this.account,
      "emailname" : this.emailname,
      "lastname" : this.lastname,
      "firstname" : this.firstname,
      "phone" : this.phone,
      "textarea" : this.textarea,
      "textarea1" : this.textarea1,
      "cityname" : this.cityname,
      "statename" : this.statename,
      "zipcode" : this.zipcode,
      "Country" : this.Country,
      "comment" : this.comment,

    }
    this.service.updateborrowersdetails(this.bid, data).subscribe(
      res => {
        console.log(res)
        // this.disableSubmit = false;
         this.tost.success("Borrowers Updated succesfully");
         this.router.navigate(['/borrowers/list']);
      }, () => {
        //this.disableSubmit = false;
      });
  
  }
}
