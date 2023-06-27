import { Component, OnInit } from '@angular/core';
import { StudentPaymentInfo } from 'src/app/student-payment-info';

@Component({
  selector: 'app-record-payment',
  templateUrl: './record-payment.component.html',
  styleUrls: ['./record-payment.component.css']
})
export class RecordPaymentComponent implements OnInit{

  paymentInfo: StudentPaymentInfo[] = [];
  studentId:String = new String;

  ngOnInit() {
    this.paymentInfo=[];
    this.studentId='';
  }

  hideStudentInfo() {
    if (this.studentId!=''){
      return false;
    }
    else{
      return true;
    }
  }
  

}
