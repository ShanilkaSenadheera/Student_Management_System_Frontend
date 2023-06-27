import { Injectable } from '@angular/core';
import { Reception } from './reception';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceptionService {

  private baseURL = "http://localhost:8080/api/v1/reception";
  
  createReception(reception: Reception): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, reception);
  }

  constructor(private httpClient: HttpClient) { }

  deleteReception(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }

  getReceptionList(): Observable<Reception[]>{
    return this.httpClient.get<Reception[]>(`${this.baseURL}`)
  }

  updateReception(id: number, reception: Reception): Observable<object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, reception)
 }

 getReceptionById(id: number): Observable<Reception> {
  return this.httpClient.get<Reception>(`${this.baseURL}/${id}`)
}

}
 