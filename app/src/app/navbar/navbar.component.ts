import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  brand:string;

  constructor( private config: ConfigService ) {
    this.brand = this.config.brand;
  }

  ngOnInit() {
  }

}
