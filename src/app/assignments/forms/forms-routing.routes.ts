import { Routes } from "@angular/router";
import { FormsTemplateDrivenComponent } from "./forms-template-driven/forms-template-driven.component";
import { FormsTemplateDrivenAssignmentComponent } from "./forms-template-driven-assignment/forms-template-driven-assignment.component";

export const FORMS_ROUTES: Routes = [
    { path: 'templatedriven', component: FormsTemplateDrivenComponent },
    { path: 'templatedriven-assign', component: FormsTemplateDrivenAssignmentComponent }
];
