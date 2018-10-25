import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { Servers2Component } from './servers/servers2.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { Server2Component } from './servers/server/server2.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';


export const ROUTING_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: ':id', component: UserComponent },
    { path: ':id/edit', component: UserComponent }
  ] },
  // { path: 'users/:id', component: UserComponent },
  // { path: 'users/:id/edit', component: UserComponent },
  { path: 'servers',
    //canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: Servers2Component, children: [
    { path: ':id', component: Server2Component, resolve: {server: ServerResolver } },
    { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
  ] }
  // { path: 'servers/:id', component: Server2Component },
  // { path: 'servers/:id/edit', component: EditServerComponent },
];
