import { Injectable } from '@angular/core';
import { Teacher } from './teacher';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private baseURL = "http://localhost:8080/api/v1/teacher";
  
  createTeacher(teacher: Teacher): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, teacher);
  }

  constructor(private httpClient: HttpClient) { }

  getTeacherLisst(): Observable<Teacher[]>{
    return this.httpClient.get<Teacher[]>(`{this.baseURl}`);
  }

  deleteTeacher(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }

  getTeacherList(): Observable<Teacher[]>{
    return this.httpClient.get<Teacher[]>(`${this.baseURL}`)
  }

  updateTeacher(id: number, teacher: Teacher): Observable<object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, teacher)
 }
}
