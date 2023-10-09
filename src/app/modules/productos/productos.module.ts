import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './components/productos/productos.component';
import { ItemsComponent } from './components/items/items.component';
import { ProductoItemComponent } from './components/producto-item/producto-item.component';



@NgModule({
  declarations: [
    ProductosComponent,
    ItemsComponent,
    ProductoItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductosModule { }
