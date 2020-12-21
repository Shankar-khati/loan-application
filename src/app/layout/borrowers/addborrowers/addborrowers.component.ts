import { Component, OnInit } from '@angular/core';
import { AnimateChildOptions } from '@angular/animations';
import { BorrowerServiceService } from '../borrower-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addborrowers',
  templateUrl: './addborrowers.component.html',
  styleUrls: ['./addborrowers.component.css']
})
export class AddborrowersComponent implements OnInit {

  imagename:any;
  account:any=" ";
  firstname:any = " ";
  lastname:any
  emailname:any;
  phone:any;
  textarea:any;
  textarea1:any;
  cityname:any;
  statename:any;
  zipcode:any;
  Country:any;
  comment:any;
  


  constructor(private service: BorrowerServiceService,
  private router: Router,
  private route: ActivatedRoute,
  private tost: ToastrService )  { }
  
  ngOnInit(): void {
   
   
  }

  onSave(){
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
    console.log(data);

    this.service.createborrowers(data).subscribe(
      res => {
        console.log(res)
        // this.disableSubmit = false;
         this.tost.success("Borrowers created succesfully");
         this.router.navigate(['/borrowers/list']);
      }, () => {
        //this.disableSubmit = false;
      });
  
  }



   afuConfig = {
      uploadAPI: {
        url:"https://example-file-upload-api"
      }
  };
//   getborrowers(data){
    
//   this.service.createborrowers(data).subscribe(
//     res => {
//       console.log(res)
//       // this.disableSubmit = false;
       
//     }, () => {
//       //this.disableSubmit = false;
//     });
// }
}
