import { StudentService } from '../../../student.service';
import { Component, OnInit } from '@angular/core';
import { StudentPaymentInfo } from 'src/app/student-payment-info';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdatePaymentDTO } from 'src/app/update-payment-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-payments',
  templateUrl: './student-payments.component.html',
  styleUrls: ['./student-payments.component.css'],
})
export class StudentPaymentsComponent implements OnInit{

  paymentInfo: StudentPaymentInfo[] = [];
  selectedClass: String | undefined ;
  selectedClassInfo: StudentPaymentInfo = new StudentPaymentInfo;
  month: number =0 ;
  updatePayment: UpdatePaymentDTO = new UpdatePaymentDTO;



  constructor( 
    private studentService: StudentService,
    private modalService: NgbModal,
    ) {}

  ngOnInit() {
   this.getStudentPaymentInfo();
  }

  // Get data from the backend

   getStudentPaymentInfo() {
    this.studentService.getStudentPaymentInfo().subscribe(
      (data: StudentPaymentInfo[]) => {
      this.paymentInfo = data; });
    
  }

  // Update a payment

  updateStudentPayment() {
    this.updatePayment.studentID=this.selectedClassInfo.studentID;
    this.updatePayment.classID=this.selectedClassInfo.classID;
    this.updatePayment.months=this.selectedClassInfo.due_months-this.month;

    this.studentService.updateStudentPayment(this.updatePayment).subscribe( data => {
      this.getStudentPaymentInfo();
      this.modalService.dismissAll();
    }
    )
  }

  // function to open the Pay Class Fee modal

  open(content: any) {
    this.month =1;
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
	}

  // function to identify which class is the user selecting from the table

  selectClass(sc: String){
    this.selectedClass=sc;
    row: StudentPaymentInfo;
    for(var row of this.paymentInfo){
      if(row.classID==this.selectedClass){
        this.selectedClassInfo = row;
      }
    }
  }

  // Disable or Enable the button depending the dueMonth variable

  isDisabled(studentPaymentInfo: StudentPaymentInfo){
    if(studentPaymentInfo.due_months==0){
      return true;
    }
    else{
      return false;
    }
  }
  
  // increase the number selector

  increase(){
    if(this.month<this.selectedClassInfo.due_months){
      this.month++;
    }
  }

  // decrease the number selector

  decrease(){
    if(this.month>1){
      this.month--;
    }
  }

}

