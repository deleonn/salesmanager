import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ConfigService } from '../config.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Order } from './order';


@Injectable()
export class OrderService {

  constructor( private http: Http, private config: ConfigService ) { }

  getOrders(): Observable<Order[]>{
    return this.http.get(this.config.apiUrl+'/orders')
        .map(this.extractData);
  }

  markAsComplete(id): Observable<null>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.config.apiUrl+'/orders/markAsComplete', { id }, options)
        .map(this.extractData);
  }

  markAsDelivered(id): Observable<null>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.config.apiUrl+'/orders/markAsDelivered', { id }, options)
        .map(this.extractData);
  }

  private extractData(res: Response){
    let body = res.json();
    return body.data || { };
  }

}
