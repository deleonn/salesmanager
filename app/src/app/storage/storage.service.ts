import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Storage } from './storage';

@Injectable()
export class StorageService {
  constructor( private http:Http ){ }

  getStorage(): Observable<Storage[]>{
    return this.http.get('http://api.stockpile.app/v1/items')
        .map(this.extractData);
  }

  private extractData(res: Response){
    let body = res.json();
    return body || { };
  }

}
