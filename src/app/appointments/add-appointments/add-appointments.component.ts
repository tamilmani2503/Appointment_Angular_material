import { Component, OnInit, ComponentFactoryResolver, ComponentFactory, ViewChild, OnDestroy } from '@angular/core';
import { Appointment } from 'src/app/model/appointment';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/service/appointment.service';
import { AlertComponent } from 'src/app/shared/alert/alert.component';
import { PlaceholderDirective } from 'src/app/shared/placeholder.directive';
import { Subscription } from 'rxjs';
declare const checkTime: any;

@Component({
  selector: 'app-add-appointments',
  templateUrl: './add-appointments.component.html',
  styleUrls: ['./add-appointments.component.css']
})
export class AddAppointmentsComponent implements OnInit,OnDestroy {
  date:Date =new Date;
  validDate : boolean = true;
  appointment = new Appointment;
  appointmentType?:string[] = ['Public','Private'];
  timezones : string[] = ['IST','BST','EST'];
  successmessage:string = '';
  @ViewChild(PlaceholderDirective,{static:false}) alertHost: PlaceholderDirective;
  private closeSub : Subscription;
  constructor(private router:Router, private appointmentService:AppointmentService, private componentFactoryResolver: ComponentFactoryResolver) { }
  ngOnDestroy(): void {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.appointment);
    this.appointmentService.saveappointment(this.appointment).subscribe(data => {
      if (data.status === 201) {     
        this.successmessage = "Appointment Bookeed Successfully!!"; 
        this.showSuccessAlert(this.successmessage); 
  
      }
    });
  }

  
  onHandleSucess() {
    this.successmessage = '';
  }

  checkTimeValidity(event:Event, startTime:any) {
    console.log((<HTMLInputElement>event.target).value);
    this.validDate = checkTime(startTime, (<HTMLInputElement>event.target).value);
  }

   private showSuccessAlert(successmessage:string) {
    const alertcomponentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const hostviewContainerRef = this.alertHost.viewContainerRef;
    hostviewContainerRef.clear();
    const dycomponentRef= hostviewContainerRef?.createComponent(alertcomponentFactory);
    dycomponentRef.instance.message =successmessage;
    this.closeSub = dycomponentRef.instance.close.subscribe(()=>{
      this.closeSub.unsubscribe();
      hostviewContainerRef.clear();
    });
    
  }

}
