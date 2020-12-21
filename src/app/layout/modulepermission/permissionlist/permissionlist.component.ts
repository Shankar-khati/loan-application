import { Component, OnInit, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-permissionlist',
  templateUrl: './permissionlist.component.html',
  styleUrls: ['./permissionlist.component.css']
})
export class PermissionlistComponent implements OnInit {

  UserName:any;
  Modules:any;

  UserNames:any = [
    {'id':'1','name':"English"},
    {'id':'2', 'name':"Hindi"},
    {'id':'3', 'name':"Urdu"},
    {'id':'4', 'name':"Franch"}
    ];
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
    this.UserNames =  [
      {'id':'1','name':"English"},
      {'id':'2', 'name':"Hindi"},
      {'id':'3', 'name':"Urdu"},
      {'id':'4', 'name':"Franch"}
      ];

      this.Modules=[{'id':'1','name':"EmailPanel"},
                   {'id':'2','name':"BorrowerDetails"},
                   {'id':'3','name':"EmployeeDetails"},
                   {'id':'4','name':"LoanDetails"},
                   {'id':'5','name':"InternalMessage"},
                   {'id':'6','name':"MissedPayment"},
                   {'id':'7','name':"Payment"},
                   {'id':'8','name':"EmployeeDetails"},
                   {'id':'9','name':"ModulePermission"},
                   {'id':'10','name':"SavingAcoount"},
                   {'id':'11','name':"GeneralSettings"},
      ]
  }
  getUserName(e){
    console.log(e)
    this.UserName = e;
  }

  onSave(){
    console.log(this.UserName)
    console.log(this.Modules)


    let data = {
      "UserName" : this.UserName,
      "Modules" : this.Modules,
    }
    console.log(data)
  }

}
