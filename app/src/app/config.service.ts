import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  constructor() { }

  public brand: string = 'SalesManager';
  public apiUrl: string = 'http://localhost:3333/api';
  public socketUrl: string = 'http://127.0.0.1:3000';

}
