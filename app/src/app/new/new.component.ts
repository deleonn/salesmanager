import { Component, OnInit } from '@angular/core';
// import { Inventory } from './inventory';
// import { InventoryService } from './inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
  // providers:[InventoryService]
})
export class NewComponent implements OnInit {

  // model = new Inventory('asdf', 'fdsa', [1,2,'asdf',4]);

  // submitted = false;
  //
  // onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  // get diagnostic() { return JSON.stringify(this.model); }

  // entryList:Inventory[];

  // constructor( private inventoryService:InventoryService ) {
  //   this.inventoryService = inventoryService;
  // }
  constructor(){}

  // array:any[];
  array = [1];

  ngOnInit() {
  //   this.getEntryList();
  }

  public add(){
    var aux = this.array.length;
    this.array.push(aux+1);
    window.scrollTo(0, 500);
    window.scrollTo(0,document.body.scrollHeight);
    setTimeout(function(){ window.scrollTo(0, 500); }, 1000);
  }
  public remove(){
    var aux = this.array.length;
    this.array.splice(aux-1, 1);
  }
  //
  // getEntryList(){
  //   this.inventoryService.getEntryList()
  //   .subscribe(entryList => this.entryList = entryList);
  // }

}

// 50.63.202.61	
