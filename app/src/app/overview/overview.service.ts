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
        .map(this.extractData);
  }

  private extractData(res: Response){
    let body = res.json();
    return body.data || { };
  }

}
