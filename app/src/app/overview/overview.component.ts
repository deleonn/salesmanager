import { Component, OnInit, OnChanges } from '@angular/core';
import { OverviewService } from './overview.service';
import { MdSnackBar } from '@angular/material';

import { Funds } from './funds';

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  providers: [OverviewService]
})
export class OverviewComponent implements OnInit, OnChanges {

  funds: Funds[];
  incompleteOrders: number;
  completeOrders: number;

  constructor( private overviewService: OverviewService, private snackBar: MdSnackBar ) { }

  ngOnInit() {
    this.getFunds();
    this.getIncompleteOrders();
    this.getCompleteOrders();
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
