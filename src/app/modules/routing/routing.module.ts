import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { InicioComponent } from '../inicio/components/inicio/inicio.component';
import { ProductosComponent } from '../productos/components/productos/productos.component';

const routes: Route[] = [
  {path: '', redirectTo: '/Inicio', pathMatch: 'full'},
  {path: 'Inicio', component: InicioComponent},
  {path: 'Productos', component: ProductosComponent}
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
