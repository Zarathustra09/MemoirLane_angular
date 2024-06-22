import { Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {CalendarComponent} from "./components/calendar/calendar.component";
import {CreateEntryComponent} from "./components/create-entry/create-entry.component";
import {UpdateEntryComponent} from "./components/update-entry/update-entry.component";

export const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'create-entry', component: CreateEntryComponent},
  {path: 'update-entry/:id', component: UpdateEntryComponent},
];
