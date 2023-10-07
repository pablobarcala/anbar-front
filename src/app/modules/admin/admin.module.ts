import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RoutingModule } from '../routing/routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './components/admin/admin.component';



@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    RoutingModule
  ]
})
export class AdminModule { }
