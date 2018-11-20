import { Routes } from "@angular/router";
import { AnimationsCourseComponent } from "./animations-course/animations-course.component";
import { AnimationsExample1Component } from "./animations-example1/animations-example1.component";

export const ANIMATIONS_ROUTES: Routes = [
    { path: 'course', component: AnimationsCourseComponent },
    { path: 'example1', component: AnimationsExample1Component }
];
