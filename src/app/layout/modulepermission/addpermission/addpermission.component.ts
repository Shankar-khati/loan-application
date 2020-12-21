import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addpermission',
  templateUrl: './addpermission.component.html',
  styleUrls: ['./addpermission.component.css']
})
export class AddpermissionComponent implements OnInit {
  Reciever:any;

  constructor() { }

  ngOnInit(): void {
  }
  onSend(){
    console.log(this.Reciever);


    let data = {
      "Reciever" : this.Reciever,
    }
    console.log(data)
  }

}
