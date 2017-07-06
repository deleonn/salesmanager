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

import { Inventory } from './inventory';
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

  inventoryData:Inventory[];
  checked: boolean;
  state: string = "in";
  isShowed: boolean = false;
  items = [];
  date = moment().format('LL');
  hour = moment().format('h');
  min = moment().format('mm');
  meridiem = moment().format('a');

  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {
    // this.getInventory();
    if (this.meridiem == 'pm') {
        this.checked = true;
    }
  }

  getInventory(){
    this.inventoryService.getInventory()
      .subscribe(inventoryData => this.inventoryData = inventoryData)
  }

  submitted = false;

  onSubmit() { this.submitted = true; }

  addItem() {
    this.items.push({tag:'item'});
    this.isShowed = true;
    this.state = (this.state === 'in' ? '':'in');
    console.warn(this.items.length);
  }

  removeItem(index) {
    this.items.splice(index, 1);
  }


}
