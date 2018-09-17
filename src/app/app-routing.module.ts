import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServersComponent } from './servers/servers.component';
import { PracticeDirectiveComponent } from './assignments/directive/practice-directive.component';
import { PracticeDatabindingComponent } from './assignments/databinding/practice-databinding.component';
import { PracticeCustomDirectiveComponent } from './assignments/custom-directive/practice-custom-directive.component';
import { PracticeSecurityComponent } from './assignments/security/practice-security.component';

const routes: Routes = [
  { path: '', redirectTo: '/servers', pathMatch: 'full' },
  { path: 'servers', component: ServersComponent },
  { path: 'practice/databinding', component: PracticeDatabindingComponent},
  { path: 'practice/directives', component: PracticeDirectiveComponent },
  { path: 'practice/custom-directives', component: PracticeCustomDirectiveComponent },
  { path: 'practice/security', component: PracticeSecurityComponent },
  { path: '**', redirectTo: '/servers' }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {

}
