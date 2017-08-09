import { Component, OnInit } from '@angular/core';
import { InventoryService } from './inventory.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import * as moment from 'moment/moment';
import * as locales from 'moment/min/locales';
moment.locale('es');

import { Order } from '../orders/order';
import { Cutter } from './cutter';

@Component({
  selector: 'inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
  providers: [InventoryService],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
      style({transform: 'translateX(-50%)'}),
      animate('300ms ease-in')
      ]),
    ])
 ]
})
export class InventoryComponent implements OnInit {

  newOrder: Order;
  newCutter: Cutter[];
  items = [];
  response: string;

  checked: boolean;
  state: string = "in";
  isShowed: boolean = false;
  submitted: boolean = false;

  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {
    this.newOrder = new Order();
  }

  addItem() {
    this.items.push({});
    this.isShowed = true;
    this.state = (this.state === 'in' ? '':'in');
    console.warn(this.items.length);
  }

  removeItem(index) {
    this.items.splice(index, 1);
  }

  onSubmit() {
    this.submitted = true;
    this.inventoryService.insertOrder(this.newOrder, this.items)
      .subscribe(
        res => {
          this.response = res;
        },
        err => {
          console.warn('error')
        }
      );
  }

  back() {
    this.newOrder = new Order();
    this.submitted = false;
  }


}
