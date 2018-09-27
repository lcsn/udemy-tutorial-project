import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PracticeDatabindingComponent } from './assignments/databinding/practice-databinding.component';
import { PracticeDirectiveComponent } from './assignments/directive/practice-directive.component';
import { PracticeCustomDirectiveComponent } from './assignments/custom-directive/practice-custom-directive.component';
import { UnlessDirective } from './assignments/custom-directive/unless.directive';
import { HighlightDirective } from './assignments/custom-directive/highlight.directive';
import { BlinkDirective } from './assignments/custom-directive/blink.directive';
import { PracticeSecurityComponent } from './assignments/security/practice-security.component';
import { PropertyBindingComponent } from './assignments/databinding/property-binding.component';
import { EventBindingComponent } from './assignments/databinding/event-binding.component';
import { LifecycleComponent } from './assignments/lifecycle.component';
import { NgContentExampleComponent } from './assignments/other/ng-content-example.component';
import { OtherComponent } from './assignments/other/other.component';
import { DatabindingDeepDiveComponent } from './assignments/databinding-deep-dive/databinding-deep-dive.component';
import { CockpitComponent } from './assignments/databinding-deep-dive/cockpit/cockpit.component';
import { ServerElementComponent } from './assignments/databinding-deep-dive/server-element/server-element.component';
import { GameControlComponent } from './assignments/game-control/game-control.component';
import { OddComponent } from './assignments/game-control/odd/odd.component';
import { EvenComponent } from './assignments/game-control/even/even.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { BasicHighlightDirective } from './assignments/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './assignments/better-highlight/better-highlight.directive';
import { PracticeServiceComponent } from './assignments/practice-service/practice-service.component';
import { AccountComponent } from './assignments/practice-service/account/account.component';
import { NewAccountComponent } from './assignments/practice-service/new-account/new-account.component';
import { PracticeServices2Component } from './assignments/practive-services2/practice-services2.component';
import { ActiveUsersComponent } from './assignments/practive-services2/active-users/active-users.component';
import { InactiveUsersComponent } from './assignments/practive-services2/inactive-users/inactive-users.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    PracticeDatabindingComponent,
    PracticeDirectiveComponent,
    PracticeCustomDirectiveComponent,
    UnlessDirective,
    HighlightDirective,
    BlinkDirective,
    PracticeSecurityComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    LifecycleComponent,
    NgContentExampleComponent,
    OtherComponent,
    DatabindingDeepDiveComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    AssignmentsComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    PracticeServiceComponent,
    AccountComponent,
    NewAccountComponent,
    PracticeServices2Component,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
