import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentOperationsService {

  private studentbaseURL = "http://localhost:8080/api/v1/student";

  constructor(private httpClient: HttpClient) { }
  
  deleteStudent(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.studentbaseURL}/${id}`)
  }

  getStudentList(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.studentbaseURL}`)
  }

  updateStudent(id: number, student: Student): Observable<object>{
    return this.httpClient.put(`${this.studentbaseURL}/${id}`, student)
 }
}
