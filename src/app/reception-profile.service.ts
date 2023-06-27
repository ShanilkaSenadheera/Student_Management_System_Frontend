import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceptionProfileService {

  constructor(private httpClient: HttpClient ) { }

  private categoryLIsturl = "http://localhost:8080/api/v1/reception";

  getCategoryList(): Observable<any>{
     return this.httpClient.get(`${this.categoryLIsturl}`)
  }
}
