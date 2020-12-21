import { Component, OnInit, ViewChild, ViewChildren, ElementRef } from '@angular/core';
import {EmailPanelServiceService  } from '../email-panel-service.service';
import { ExportAsService, ExportAsConfig } from 'ngx-export-as';
import * as jspdf from 'jspdf';

@Component({
  selector: 'app-listemail',
  templateUrl: './listemail.component.html',
  styleUrls: ['./listemail.component.css']
})
export class ListemailComponent implements OnInit {
  @ViewChild('content', {static: false}) content: ElementRef;

  emaildata:any;
  constructor(
    public service: EmailPanelServiceService,
    private exportAsService: ExportAsService
    
  ) { }
  
  
  @ViewChildren('myItem') item;
   selectedIds = [];


 downloadPDF() {
   alert('sssssssss')
    const doc = new jspdf.jsPDF();
    for (var i = 1; i <= 12; i++) {
      doc.text("Hello world!", 10*i, 10*i);
    }
    doc.text("Hello world!", 20, 20);
   doc.save("a4.pdf");
  
  }

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
    this.getemailPanel();
    this.emaildata = [
      {"id":"1", "senderid":"text@gmail.com","reciverid":"test@gmail.com", "subject":"Test Mail","message":"testing 123"},
      {"id":"2", "senderid":"text1@gmail.com","reciverid":"test1@gmail.com", "subject":"Test Mail2","message":"testing 1234"},
    ]
    
  }
  getemailPanel(){
    this.service.getemailPanel().subscribe(
      res => {
        console.log(res)

        this.emaildata = res['emailPanel'];
        // this.disableSubmit = false;
         
      }, () => {
        //this.disableSubmit = false;
      });
  }


}
