import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './components/productos/productos.component';
import { ItemsComponent } from './components/items/items.component';



@NgModule({
  declarations: [
    ProductosComponent,
    ItemsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductosModule { }
