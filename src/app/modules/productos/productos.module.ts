import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './components/productos/productos.component';
import { AlmohadonesComponent } from './components/almohadones/almohadones.component';



@NgModule({
  declarations: [
    ProductosComponent,
    AlmohadonesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductosModule { }
