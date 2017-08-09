import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router }      from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  login(username: string, password: string) {
   this.authService.login(username, password).subscribe(() => {
     if (this.authService.isLoggedIn) {
       // Get the redirect URL from our auth service
       // If no redirect has been set, use the default
       let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';
       // Redirect the user
       this.router.navigate([redirect]);
     }
   });
  }

}
