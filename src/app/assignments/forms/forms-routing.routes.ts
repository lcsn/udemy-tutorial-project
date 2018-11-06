import { Routes } from "@angular/router";
import { FormsTemplateDrivenComponent } from "./forms-template-driven/forms-template-driven.component";
import { FormsTemplateDrivenAssignmentComponent } from "./forms-template-driven-assignment/forms-template-driven-assignment.component";
import { FormsReactiveComponent } from "./forms-reactive/forms-reactive.component";
import { FormsReactiveAssignComponent } from "./forms-reactive-assign/forms-reactive-assign.component";

export const FORMS_ROUTES: Routes = [
    { path: 'templatedriven', component: FormsTemplateDrivenComponent },
    { path: 'templatedriven-assign', component: FormsTemplateDrivenAssignmentComponent },
    { path: 'reactive', component: FormsReactiveComponent },
    { path: 'reactive-assign', component: FormsReactiveAssignComponent }
];
