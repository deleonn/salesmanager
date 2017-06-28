import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import {MdSnackBar} from '@angular/material';

import { Order } from './order';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [OrderService]
})
export class OrdersComponent implements OnInit {

  orders: Order[];
  complete: number;

  constructor( private orderService: OrderService, private snackBar: MdSnackBar ) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getOrders()
      .subscribe(orders => this.orders = orders);
  }

  markAsComplete(id) {
    this.orderService.markAsComplete(id)
      .subscribe(
        response => {
          this.getOrders();
          this.snackBar.open('Se ha completado la orden!', 'OK', {
            duration: 3000,
          })
          }, error => {
        }
      );
  }

  markAsDelivered(id) {
    this.orderService.markAsDelivered(id)
      .subscribe(
        response => {
          this.getOrders();
          this.snackBar.open('Se ha entregado la orden!', 'OK', {
            duration: 3000,
          })
          }, error => {
        }
      );
  }

  deleteFromList() {
    
  }

}
