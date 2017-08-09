import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { ConfigService } from '../config.service';

@Injectable()
export class AuthService {

  constructor(public http: Http, private config: ConfigService ){ }

  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(email: string, password:string): Observable<boolean> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.config.apiUrl + '/login', { email, password }, options)
                    .map(res => {
                      let body = res.json();
                      if (res.ok == true) {
                        localStorage.setItem('token', JSON.stringify(body.token));
                        localStorage.setItem('currentUser', JSON.stringify(body.user));
                        return this.isLoggedIn = true;
                      }
                      return this.isLoggedIn = false;
                    });
  }

  logout(): Promise<boolean> {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.isLoggedIn = false;
    return Promise.resolve(false);
  }

  getLoggedUser(): void {
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      return currentUser;
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
}
