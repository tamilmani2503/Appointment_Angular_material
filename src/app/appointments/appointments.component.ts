import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../service/appointment.service';
import { Appointment } from '../model/appointment';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  appointments: Appointment[] ;

  constructor(private appointmentService:AppointmentService) { }

  ngOnInit(): void {
    this.appointmentService.fetchAllAppointments().subscribe(data =>{
      if (data.status=== 200) {
        this.appointments = data.body;
        console.log(this.appointments);
      }
    });
  }

}
