import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  constructor() { }

  public brand: string = 'SalesManager';
  public apiUrl: string = 'http://salesmanager.dev/api';

}
