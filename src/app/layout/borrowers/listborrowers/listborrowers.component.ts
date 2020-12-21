import { Component, OnInit, ViewChildren } from '@angular/core';
import { BorrowerServiceService } from '../borrower-service.service';
import { environment } from "../../../../environments/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import * as jspdf from 'jspdf';
import html2PDF from 'jspdf-html2canvas';








@Component({
  selector: 'app-listborrowers',
  templateUrl: './listborrowers.component.html',
  styleUrls: ['./listborrowers.component.css']
})
export class ListborrowersComponent implements OnInit {
  borrowerdata:any;
  

  downloadPDF() {
    alert('sssssssss')
    
    var element = document.getElementById('dataTable');
    html2PDF(element).then((canvas) =>{
      console.log(canvas)
      var imgData = canvas.getContext('text')

      const doc = new jspdf.jsPDF();

      doc.text(imgData,10,10)
    doc.save("a4.pdf");
    })
    
   
   }
 
  constructor(
   
    public service: BorrowerServiceService,
    private http: HttpClient,
    private tostr: ToastrService,
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
    this.getborrowers();
    // this.borrowerdata = [
    //   {"id":"1", "Image":"hbti.jpg","FirstName":"surendra", "LastName":"Chaudhary","Email":"test@gmail.com","MobileNumber":"364544664","Status":"Valid","Action":"view"},
    //   {"id":"1", "Image":"hbti.jpg","FirstName":"surendra", "LastName":"Chaudhary","Email":"test@gmail.com","MobileNumber":"364544664","Status":"Valid","Action":"view"},
     
    // ]
  }

  getborrowers(){
    this.service.getborrowers().subscribe(
      res => {
        console.log(res)

        this.borrowerdata = res['borrowers'];
        // this.disableSubmit = false;
         
      }, () => {
        //this.disableSubmit = false;
      });
  }

  deleteborrowers(id){
    this.service.deleteborrowers(id).subscribe(
      res => {
        console.log(res)
        this.getborrowers();
      
         
      }, () => {
        //this.disableSubmit = false;
      });
  
    console.log(id)

  }

}
