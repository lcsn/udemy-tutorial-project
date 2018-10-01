import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { Servers2Component } from './servers/servers2.component';

export const ROUTING_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servers', component: Servers2Component },
  { path: 'users', component: UsersComponent },
];
