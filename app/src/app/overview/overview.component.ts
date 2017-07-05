import { Component, OnInit, OnChanges } from '@angular/core';
import { OverviewService } from './overview.service';
import { ConfigService } from '../config.service';
import { MdSnackBar } from '@angular/material';


import { Funds } from './funds';

import * as io from 'socket.io-client';

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  providers: [OverviewService]
})
export class OverviewComponent implements OnInit, OnChanges {

  constructor( private overviewService: OverviewService, private snackBar: MdSnackBar, private config: ConfigService ) { }

  funds: Funds[];
  incompleteOrders: number;
  completeOrders: number;
  socket = io(this.config.socketUrl);

  ngOnInit() {
    this.getFunds();
    this.getCompleteOrders();
    this.getIncompleteOrders();

    this.socket.on('emit', (data) => {
      alert('socket called');
      console.warn(data);
      this.getFunds();
    });
  }

  ngOnChanges() {

  }

  getFunds() {
    this.overviewService.getFunds()
      .subscribe(res => this.funds = res);
  }

  getCompleteOrders() {
    this.overviewService.getCompleteOrders()
      .subscribe(res => this.completeOrders = res);
  }

  getIncompleteOrders() {
    this.overviewService.getIncompleteOrders()
      .subscribe(res => this.incompleteOrders = res);
  }

}
