import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { PracticeServices2Component } from './assignments/practice-services2/practice-services2.component';
import { ActiveUsersComponent } from './assignments/practice-services2/active-users/active-users.component';
import { InactiveUsersComponent } from './assignments/practice-services2/inactive-users/inactive-users.component';
import { RoutingComponent } from './assignments/routing/routing.component';
import { HomeComponent } from './assignments/routing/home/home.component';
import { UserComponent } from './assignments/routing/users/user/user.component';
import { UsersComponent } from './assignments/routing/users/users.component';
import { EditServerComponent } from './assignments/routing/servers/edit-server/edit-server.component';
import { Servers2Component } from './assignments/routing/servers/servers2.component';
import { Server2Component } from './assignments/routing/servers/server/server2.component';
import { PageNotFoundComponent } from './assignments/routing/page-not-found/page-not-found.component';
import { ErrorPageComponent } from './assignments/routing/error-page/error-page.component';
import { ObservableComponent } from './assignments/observable/observable.component';
import { HomeObservableComponent } from './assignments/observable/home-observable/home-observable.component';
import { UserObservableComponent } from './assignments/observable/user-observable/user-observable.component';
import { FormsTemplateDrivenComponent } from './assignments/forms/forms-template-driven/forms-template-driven.component';
import { FormsComponent } from './assignments/forms/forms.component';
import { FormsTemplateDrivenAssignmentComponent } from './assignments/forms/forms-template-driven-assignment/forms-template-driven-assignment.component';
import { FormsReactiveComponent } from './assignments/forms/forms-reactive/forms-reactive.component';
import { FormsReactiveAssignComponent } from './assignments/forms/forms-reactive-assign/forms-reactive-assign.component';
import { PipesComponent } from './assignments/pipes/pipes.component';
import { ShortenPipe } from './assignments/pipes/shorten.pipe';
import { FilterPipe } from './assignments/pipes/filter.pipe';
import { ReversePipe } from './assignments/pipes/reverse.pipe';
import { SortPipe } from './assignments/pipes/sort.pipe';
import { HttpComponent } from './assignments/http/http.component';
import { HttpModule } from '@angular/http';
import { AnimationsComponent } from './assignments/animations/animations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

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
    InactiveUsersComponent,
    // Routing Assignment
    RoutingComponent,
    HomeComponent,
    Servers2Component,
    Server2Component,
    EditServerComponent,
    UsersComponent,
    UserComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    ObservableComponent,
    HomeObservableComponent,
    UserObservableComponent,
    FormsTemplateDrivenComponent,
    FormsComponent,
    FormsTemplateDrivenAssignmentComponent,
    FormsReactiveComponent,
    FormsReactiveAssignComponent,
    PipesComponent,
    ShortenPipe,
    FilterPipe,
    ReversePipe,
    SortPipe,
    HttpComponent,
    AnimationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
