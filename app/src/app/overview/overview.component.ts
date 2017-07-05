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

  constructor( private overviewService: OverviewService, private snackBar: MdSnackBar ) { }

  ngOnInit() {
    this.getFunds();
  }

  ngOnChanges() {

  }

  getFunds() {
    this.overviewService.getFunds()
      .subscribe(funds => this.funds = funds);
  }

}
