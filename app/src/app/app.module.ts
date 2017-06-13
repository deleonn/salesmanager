import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdButtonModule, MdCheckboxModule, MdIconModule } from '@angular/material';

import 'hammerjs';

import { routing } from './app.routing';
import { AuthGuard } from './auth-guard.service'

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { StorageComponent } from './storage/storage.component';
import { StorageService } from './storage/storage.service';
import { InventoryComponent } from './inventory/inventory.component';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    LoginComponent,
    AuthComponent,
    HomeComponent,
    NavbarComponent,
    MainComponent,
    SidenavComponent,
    StorageComponent,
    InventoryComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MdButtonModule,
    MdCheckboxModule,
    MdIconModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
