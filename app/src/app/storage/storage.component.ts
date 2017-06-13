import { Component, OnInit } from '@angular/core';
import { StorageService } from './storage.service';

import { Storage } from './storage';

@Component({
  selector: 'storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css'],
  providers:[StorageService]
})
export class StorageComponent implements OnInit {

storageData:Storage[];

  constructor( private storageService:StorageService ) {
    this.storageService = storageService;
  }

  ngOnInit() {
    this.getStorage();
  }

  getStorage(){
    this.storageService.getStorage()
    .subscribe(storageData => this.storageData = storageData);
  }

}
