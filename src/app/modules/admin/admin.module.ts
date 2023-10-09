import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RoutingModule } from '../routing/routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminProductosComponent } from './components/admin-productos/admin-productos.component';
import { AdminCategoriasComponent } from './components/admin-categorias/admin-categorias.component';
import { EditProductosComponent } from './components/edit-productos/edit-productos.component';
import { AdminAcercaDeComponent } from './components/admin-acerca-de/admin-acerca-de.component';



@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    AdminComponent,
    AdminProductosComponent,
    AdminCategoriasComponent,
    EditProductosComponent,
    AdminAcercaDeComponent
  ],
  imports: [
    CommonModule,
    RoutingModule
  ]
})
export class AdminModule { }
