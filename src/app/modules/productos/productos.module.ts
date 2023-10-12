import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './components/productos/productos.component';
import { ItemsComponent } from './components/items/items.component';
import { ProductoItemComponent } from './components/producto-item/producto-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductoPaginaComponent } from './components/producto-pagina/producto-pagina.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductosComponent,
    ItemsComponent,
    ProductoItemComponent,
    ProductoPaginaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class ProductosModule { }
