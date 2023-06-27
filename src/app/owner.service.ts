import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Owner } from './owner';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  
  private baseURL = "http://localhost:8080/api/v1/owner";
  
  createOwner(owner: Owner): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, owner);
  }

  constructor(private httpClient: HttpClient) { }

}
