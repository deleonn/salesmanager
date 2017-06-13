import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Inventory } from './inventory';

@Injectable()
export class InventoryService {
  constructor( private http:Http ){ }

  getInventory(): Observable<Inventory[]>{
    return this.http.get('http://api.stockpile.app/v1/entries_list')
        .map(this.extractData);
  }

  private extractData(res: Response){
    let body = res.json();
    return body || { };
  }

}
