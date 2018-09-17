import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServersComponent} from './servers/servers.component';
import {PracticeDirectiveComponent} from './assignments/practice-directive.component';

const routes: Routes = [
  { path: '', redirectTo: '/servers', pathMatch: 'full' },
  { path: 'servers', component: ServersComponent },
  { path: 'practice/directives', component: PracticeDirectiveComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {

}
