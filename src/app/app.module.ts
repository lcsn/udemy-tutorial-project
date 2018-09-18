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
    ServerElementComponent
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
