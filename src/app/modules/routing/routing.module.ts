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
import { ContactoComponent } from '../contacto/components/contacto/contacto.component';
import { EditProductosComponent } from '../admin/components/edit-productos/edit-productos.component';
import { AdminAcercaDeComponent } from '../admin/components/admin-acerca-de/admin-acerca-de.component';
import { EditAcercaDeComponent } from '../admin/components/edit-acerca-de/edit-acerca-de.component';
import { EditCategoriasComponent } from '../admin/components/edit-categorias/edit-categorias.component';
import { AdminFaqComponent } from '../admin/components/admin-faq/admin-faq.component';
import { EditFaqComponent } from '../admin/components/edit-faq/edit-faq.component';
import { AddCategoriasComponent } from '../admin/components/add-categorias/add-categorias.component';

const routes: Route[] = [
  {path: '', redirectTo: '/main/Inicio', pathMatch: 'full'},
  {path: 'main', component: HomeComponent, children: [
    {path: 'Inicio', component: InicioComponent},
    {path: 'Productos', component: ProductosComponent},
    {path: 'Acerca de', component: AcercaDeComponent},
    {path: 'FAQ', component: FaqComponent},
    {path: 'Contacto', component: ContactoComponent}
  ]},
  {path: 'admin', component: AdminComponent, children: [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent, children: [
      {path: 'admin-productos', component: AdminProductosComponent, children: [
        {path: 'edit-producto/:id', component: EditProductosComponent}
      ]},
      {path: 'admin-categorias', component: AdminCategoriasComponent, children: [
        {path: 'edit-categorias/:id', component: EditCategoriasComponent},
        {path: 'add-categoria', component: AddCategoriasComponent}
      ]},
      {path: 'admin-acerca-de', component: AdminAcercaDeComponent, children: [
        {path: 'edit-acerca-de/:id', component: EditAcercaDeComponent}
      ]},
      {path: 'admin-faq', component: AdminFaqComponent, children: [
        {path: 'edit-faq/:id', component: EditFaqComponent}
      ]}
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
