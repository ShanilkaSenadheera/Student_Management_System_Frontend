import { UpdatePaymentDTO } from './update-payment-dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentPaymentInfo } from './student-payment-info';
import { Student } from './student';
 
@Injectable({
  providedIn: 'root'
})

export class StudentService {

  private getUrl = "http://localhost:8080/getEnrollmentInfo";
  private putUrl = "http://localhost:8080/updatePayment";
  private studentId = "S00001";
  

  public getStudentId(){
    return this.studentId;
  }
  public setStudentId(studentId: string){
    this.studentId=studentId;
  }

  constructor(private httpClient: HttpClient) { }

  getStudentPaymentInfo(): Observable<StudentPaymentInfo[]>{
    return this.httpClient.get<StudentPaymentInfo[]>(`${this.getUrl}/${this.studentId}`);
  }

  updateStudentPayment(updatePaymentDTO :UpdatePaymentDTO): Observable<Object>{
    return this.httpClient.put(`${this.putUrl}`, updatePaymentDTO);
  }


}
