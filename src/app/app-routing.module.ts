import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './login/registration/registration.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { ProfileComponent } from './profile/profile.component';
import { AddAppointmentsComponent } from './appointments/add-appointments/add-appointments.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'', component: LoginComponent}, 
  {path:'register', component: RegistrationComponent},
  {path:'member/home', component: AppointmentsComponent, canActivate: [AuthGuard]},
  {path:'member/profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path:'member/appointment/add', component: AddAppointmentsComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
