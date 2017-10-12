import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigComponent } from './config/config.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from "./login/login.component";
import { AuthGuardService } from "./service/auth-guard.service";

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'config', component: ConfigComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);