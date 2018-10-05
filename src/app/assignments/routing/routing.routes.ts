import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { Servers2Component } from './servers/servers2.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { Server2Component } from './servers/server/server2.component';


export const ROUTING_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserComponent },
  { path: 'users/:id/edit', component: UserComponent },
  { path: 'servers', component: Servers2Component, children: [
      { path: ':id', component: Server2Component },
      { path: ':id/edit', component: EditServerComponent }
    ]
  },
  // { path: 'servers/:id', component: Server2Component },
  // { path: 'servers/:id/edit', component: EditServerComponent },
];
