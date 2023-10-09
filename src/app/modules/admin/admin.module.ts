import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from '../routing/routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminProductosComponent } from './components/admin-productos/admin-productos.component';
import { AdminCategoriasComponent } from './components/admin-categorias/admin-categorias.component';
import { EditProductosComponent } from './components/edit-productos/edit-productos.component';
import { AdminAcercaDeComponent } from './components/admin-acerca-de/admin-acerca-de.component';
import { EditAcercaDeComponent } from './components/edit-acerca-de/edit-acerca-de.component';



@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    AdminComponent,
    AdminProductosComponent,
    AdminCategoriasComponent,
    EditProductosComponent,
    AdminAcercaDeComponent,
    EditAcercaDeComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
