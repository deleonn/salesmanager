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
  error: string;

  constructor( private orderService: OrderService, private snackBar: MdSnackBar ) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getOrders()
      .subscribe(
        orders => {
          if(orders.length > 0){
            this.orders = orders
          }else {
            this.error = 'error'
          }
        },
        error => this.error = 'error'
      );
  }

  markAsComplete(id) {
    this.orderService.markAsComplete(id)
      .subscribe(
        response => {
          this.getOrders();
          this.snackBar.open('Se ha completado la orden!', 'OK', {
            duration: 3000,
          });
        },
        error => this.error = 'error'
      );
  }

  markAsDelivered(id) {
    this.orderService.markAsDelivered(id)
      .subscribe(
        response => {
          this.getOrders();
          this.snackBar.open('Se ha entregado la orden!', 'OK', {
            duration: 3000,
          });
          },
          error => this.error = 'error'
      );
  }

  deleteFromList() {

  }

}
