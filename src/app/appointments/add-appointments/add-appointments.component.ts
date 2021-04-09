import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/model/appointment';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/service/appointment.service';

@Component({
  selector: 'app-add-appointments',
  templateUrl: './add-appointments.component.html',
  styleUrls: ['./add-appointments.component.css']
})
export class AddAppointmentsComponent implements OnInit {
  date:Date =new Date;
  appointment = new Appointment;
  appointmentType?:string[] = ['Public','Private'];
  timezones : string[] = ['IST','BST','EST'];

  constructor(private router:Router, private appointmentService:AppointmentService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.appointment);
    this.appointmentService.saveappointment(this.appointment).subscribe(data => {
      if (data.status === 201) {
        this.router.navigate(['member/home']);
      }
    });
  }

}
