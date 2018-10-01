import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { Servers2Component } from './servers/servers2.component';
import { UserComponent } from './users/user/user.component';

export const ROUTING_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserComponent },
  { path: 'servers', component: Servers2Component },
];
