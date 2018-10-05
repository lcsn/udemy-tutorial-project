import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServersComponent } from './servers/servers.component';
import { LifecycleComponent } from './assignments/lifecycle.component';
import { PracticeDirectiveComponent } from './assignments/directive/practice-directive.component';
import { PracticeDatabindingComponent } from './assignments/databinding/practice-databinding.component';
import { PracticeCustomDirectiveComponent } from './assignments/custom-directive/practice-custom-directive.component';
import { PracticeSecurityComponent } from './assignments/security/practice-security.component';
import { OtherComponent } from './assignments/other/other.component';
import { DatabindingDeepDiveComponent } from './assignments/databinding-deep-dive/databinding-deep-dive.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { PracticeServiceComponent } from './assignments/practice-service/practice-service.component';
import { PracticeServices2Component } from './assignments/practice-services2/practice-services2.component';
import { RoutingComponent } from './assignments/routing/routing.component';
import { ROUTING_ROUTES } from './assignments/routing/routing.routes';
import { PageNotFoundComponent } from './assignments/routing/page-not-found/page-not-found.component';

const ROUTES: Routes = [
  { path: '', redirectTo: '/servers', pathMatch: 'full' },
  { path: 'servers', component: ServersComponent },
  { path: 'practice/lifecycle', component: LifecycleComponent},
  { path: 'practice/databinding', component: PracticeDatabindingComponent},
  { path: 'practice/databinding-deep-dive', component: DatabindingDeepDiveComponent},
  { path: 'practice/directives', component: PracticeDirectiveComponent },
  { path: 'practice/custom-directives', component: PracticeCustomDirectiveComponent },
  { path: 'practice/security', component: PracticeSecurityComponent },
  { path: 'practice/other', component: OtherComponent },
  { path: 'practice/assignment', component: AssignmentsComponent },
  { path: 'practice/services', component: PracticeServiceComponent },
  { path: 'practice/services2', component: PracticeServices2Component },
  { path: 'practice/routing', component: RoutingComponent, children: ROUTING_ROUTES },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(ROUTES) ]
})
export class AppRoutingModule {

}
