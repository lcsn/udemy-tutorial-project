import { Routes } from "@angular/router";

import { HomeObservableComponent } from "./home-observable/home-observable.component";
import { UserObservableComponent } from "./user-observable/user-observable.component";

export const OBSERVABLE_ROUTES: Routes = [
    { path: '', component: HomeObservableComponent },
    { path: 'user/:id', component: UserObservableComponent }
];
