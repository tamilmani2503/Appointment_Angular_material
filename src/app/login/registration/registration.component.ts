import { Component, OnInit } from '@angular/core';
import { UserDetails } from 'src/app/model/user-details';
import  { MatDatepickerInputEvent} from '@angular/material/datepicker'
import * as moment from 'moment';
import { Country } from 'src/app/model/country';
import { State } from 'src/app/model/state';
import { AuthService } from 'src/app/sevice/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new UserDetails;
  date:Date =new Date;
  citizenStatus: string = '';
  martialStatus: string[] = ['Single','Married'];
  guardianType: string[] = ['Father','Mother','Husband'];
  states : any[] = [];  
  statesIndia : State[] = [{stateCode:'TN', stateDescription:'TamilNadu'},
  {stateCode:'KA', stateDescription:'Karnataka'},
  {stateCode:'KL', stateDescription:'Kerala'}];
  statesUS : State[] = [{stateCode:'AL', stateDescription:'Alabama'},
  {stateCode:'AK', stateDescription:'Alaska'},
  {stateCode:'AZ', stateDescription:'Arizona'}];
  countries : Country[] = [{countryCode:'IN',countryDescription:'India',states:this.statesIndia},
  {countryCode:'US',countryDescription:'United States of America',states:this.statesUS}];
  timezones : string[] = ['IST','BST','EST'];
  
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    
  }

  checkCitizenStatus(event: MatDatepickerInputEvent<Date>) {
    let currenDate = moment();
    let age = currenDate.diff(event.target.value, "years"); 
    this.citizenStatus = age < 18 ? 'Minor': (age >= 18 && age <= 60) ? 'Major':'Senior';
  }

  onSubmit () {
    console.log(this.user);
    this.user.userId = Math.floor(100000 + Math.random() * 900000);
    this.authService.registerUser(this.user).subscribe(data => {
      this.router.navigate(['']);
    });
  }

  getStateByCountry (event : any) {
   this.states = this.states.concat(this.countries.find(country => country.countryCode === event.source.value)?.states);
  }
}
