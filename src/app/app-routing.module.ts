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
// import { PageNotFoundComponent } from './assignments/routing/page-not-found/page-not-found.component';
import { ErrorPageComponent } from './assignments/routing/error-page/error-page.component';
import { OBSERVABLE_ROUTES } from './assignments/observable/observable-routing.routes';
import { ObservableComponent } from './assignments/observable/observable.component';
import { FormsTemplateDrivenComponent } from './assignments/forms/forms-template-driven/forms-template-driven.component';
import { FORMS_ROUTES } from './assignments/forms/forms-routing.routes';
import { FormsComponent } from './assignments/forms/forms.component';
import { PipesComponent } from './assignments/pipes/pipes.component';
import { HttpComponent } from './assignments/http/http.component';
import { AnimationsComponent } from './assignments/animations/animations.component';
import { ANIMATIONS_ROUTES } from './assignments/animations/animations-routing.routes';

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
  { path: 'practice/observable', component: ObservableComponent, children: OBSERVABLE_ROUTES },
  { path: 'practice/forms', component: FormsComponent, children: FORMS_ROUTES },
  { path: 'practice/pipes', component: PipesComponent },
  { path: 'practice/http', component: HttpComponent },
  { path: 'practice/animations', component: AnimationsComponent, children: ANIMATIONS_ROUTES },
  //{ path: 'not-found', component: PageNotFoundComponent },  
  { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!' } },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  exports: [ RouterModule ],
  // imports: [ RouterModule.forRoot(ROUTES, { useHash: true }) ]
  imports: [ RouterModule.forRoot(ROUTES) ]
})
export class AppRoutingModule {

}
