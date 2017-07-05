import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdIconModule, MdTooltipModule, MdSnackBarModule } from '@angular/material';

import 'hammerjs';

import { routing } from './app.routing';
import { AuthGuard } from './auth-guard.service';
import { ConfigService } from './config.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { InventoryComponent } from './inventory/inventory.component';
import { OrdersComponent } from './orders/orders.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthComponent,
    HomeComponent,
    NavbarComponent,
    MainComponent,
    SidenavComponent,
    InventoryComponent,
    OrdersComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    MdTooltipModule,
    MdSnackBarModule,
    MdButtonModule,
    MdCheckboxModule,
    MdIconModule
  ],
  providers: [AuthGuard, ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
