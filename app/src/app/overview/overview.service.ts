import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ConfigService } from '../config.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Funds } from './funds';

@Injectable()
export class OverviewService {

  constructor( private http:Http, private config: ConfigService ){ }

  getFunds(): Observable<Funds[]>{
    return this.http.get(this.config.apiUrl+'/overview/get_funds')
        .map(this.extractData)
  }

  getCompleteOrders() {
    return this.http.get(this.config.apiUrl+'/overview/get_complete_orders')
        .map(this.extractData)
  }

  getIncompleteOrders() {
    return this.http.get(this.config.apiUrl+'/overview/get_incomplete_orders')
        .map(this.extractData)
  }

  private extractData(res: Response){
    let body = res.json();
    if (body.data === 0) {
        return '0';
    }
    return body.data || { };
  }

}
