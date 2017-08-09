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

  funds: number;
  incompleteOrders: string;
  completeOrders: string;
  socket = io(this.config.socketUrl);

  ngOnInit() {
    this.funds = null;
    this.completeOrders = null;
    this.incompleteOrders = null;
    this.getFunds();
    this.getCompleteOrders();
    this.getIncompleteOrders();

    this.socket.on('emit', (data) => {
      // alert('socket called');
      console.warn(data);
      this.getFunds();
      this.getCompleteOrders();
      this.getIncompleteOrders();
    });
    return () => {
     this.socket.disconnect();
   };
  }

  ngOnChanges() {

  }

  getFunds() {
    this.overviewService.getFunds()
      .subscribe(res => {
        if(res[0].total !== 0){
          this.funds = res[0].total;
        } else {
          this.funds = 0;
        }
      });
  }

  getCompleteOrders() {
    this.overviewService.getCompleteOrders()
      .subscribe(res => this.completeOrders = res[0].total);
  }

  getIncompleteOrders() {
    this.overviewService.getIncompleteOrders()
      .subscribe(res => this.incompleteOrders = res[0].total);
  }

}
