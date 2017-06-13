import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  brand:string;

  constructor() {
    this.brand = "Stockpile";
  }

  ngOnInit() {
  }

}
