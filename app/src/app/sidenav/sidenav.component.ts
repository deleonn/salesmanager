import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router }      from '@angular/router';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  brand:string;

  constructor(public authService: AuthService, public router: Router) {
    this.brand = "Stockpile";
  }

  logout() {
    let r = confirm("Esta seguro que desea salir?");
    if (r) {
      this.authService.logout()
      .then(res => {
        if(!res) {
          this.router.navigate(['/auth/signin']);
        }
      });
    }
  }

  ngOnInit() {
  }

}
