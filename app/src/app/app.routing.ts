import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard.service';

import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StorageComponent } from './storage/storage.component';
import { InventoryComponent } from './inventory/inventory.component';
import { NewComponent } from './new/new.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        component: HomeComponent
      },
      {
        path: 'almacen',
        component: StorageComponent
      },
      {
        path: 'registro',
        component: InventoryComponent
      },
      {
        path: 'nueva_entrada',
        component: NewComponent
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
