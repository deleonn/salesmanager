import { Component, OnInit } from '@angular/core';
import { InventoryService } from './inventory.service';

import { Inventory } from './inventory';

@Component({
  selector: 'inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
  providers: [InventoryService]
})
export class InventoryComponent implements OnInit {

  inventoryData:Inventory[];

  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {
    this.getInventory();
  }

  getInventory(){
    this.inventoryService.getInventory()
      .subscribe(inventoryData => this.inventoryData = inventoryData)
  }

  submitted = false;

  onSubmit() { this.submitted = true; }



}
