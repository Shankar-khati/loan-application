import { Component, OnInit, ViewChildren } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';


@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  guests:any;
  constructor(
    public service: EmployeeServiceService
  ) { }
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
this.getemployee();
    this.guests=[{'id':'1','name':"English",'imagename':"ss.jpg",'username':"gdd",'emailname':"hbtisurendra@gmail.com",'phone':"9648142095",'actions':"sshs"},
    {'id':'1','name':"Hindi",'imagename':"gdgdg",'username':"ncn.png",'emailname':"hbtiajay@gmail.com",'phone':"9648142067",'actions':"sshs"},
   
    ]
  }

  getemployee(){
    this.service.getemployee().subscribe(
      res => {
        console.log(res)

        this.guests = res['employee'];
        // this.disableSubmit = false;
         
      }, () => {
        //this.disableSubmit = false;
      });
  }


}

