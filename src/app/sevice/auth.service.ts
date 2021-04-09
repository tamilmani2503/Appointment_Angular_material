import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserDetails } from '../model/user-details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  serviceEndpoint?: string;

  constructor(private httpClient:HttpClient) {
    this.serviceEndpoint = "http://localhost:8085/api/v1/authservice/";
   }

  registerUser(user: UserDetails) {
    let url =  this.serviceEndpoint +"register";
    return this.httpClient.post(url,user);
  }

  login(user: UserDetails): Observable<any> {
    let url =  this.serviceEndpoint +"login";
    return this.httpClient.post(url,user, {observe:'response'});
  }

  
}
