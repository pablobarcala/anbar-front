import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { InicioComponent } from '../inicio/components/inicio/inicio.component';
import { ProductosComponent } from '../productos/components/productos/productos.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { LoginComponent } from '../admin/components/login/login.component';
import { DashboardComponent } from '../admin/components/dashboard/dashboard.component';
import { AdminComponent } from '../admin/components/admin/admin.component';
import { AcercaDeComponent } from '../acerca-de/components/acerca-de/acerca-de.component';
import { AdminProductosComponent } from '../admin/components/admin-productos/admin-productos.component';
import { AdminCategoriasComponent } from '../admin/components/admin-categorias/admin-categorias.component';
import { FaqComponent } from '../faq/components/faq/faq.component';

const routes: Route[] = [
  {path: '', redirectTo: '/main/Inicio', pathMatch: 'full'},
  {path: 'main', component: HomeComponent, children: [
    {path: 'Inicio', component: InicioComponent},
    {path: 'Productos', component: ProductosComponent},
    {path: 'Acerca de', component: AcercaDeComponent},
    {path: 'FAQ', component: FaqComponent}
  ]},
  {path: 'admin', component: AdminComponent, children: [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent, children: [
      {path: 'admin-productos', component: AdminProductosComponent},
      {path: 'admin-categorias', component: AdminCategoriasComponent}
    ]}
  ]}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
