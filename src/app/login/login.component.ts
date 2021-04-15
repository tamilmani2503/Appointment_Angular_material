import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../model/user-details';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginSuccessUrl: string = 'member/home';
  user = new UserDetails;
  loginFailure?: boolean;

  constructor(private router: Router, private authSerice: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.user);
    this.authSerice.login(this.user).subscribe(data => {
      console.log(data.status);
      console.log(data);
      if (data.status === 200 && data.body != null) {
        this.router.navigate([this.loginSuccessUrl]);
        localStorage.setItem('authorized', 'true');
        localStorage.setItem('token', data.body['token']);
      } else  {
        this.loginFailure = true;
      }

    });
  }

}
