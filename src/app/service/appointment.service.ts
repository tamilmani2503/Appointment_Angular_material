import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appointment } from '../model/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  

  
 token ?: string;
  apptService ?: string;
  constructor(private httpClient:HttpClient) {
    this.apptService = "http://localhost:8085/api/v1/appointment/";
    this.token = localStorage.getItem('token') || undefined;
   }

  saveappointment(appointment: Appointment) : Observable<any>{
    const headers= new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('token',''+this.token);
      return this.httpClient.post(this.apptService+"add",appointment,{'headers':headers, observe:'response'});
  }
 
  fetchAllAppointments() :Observable<any> {
    const headers= new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('token',''+this.token);
    return this.httpClient.get(this.apptService+"",{'headers':headers,observe:'response'});
  }


}
