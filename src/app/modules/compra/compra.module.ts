import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompraComponent } from './components/compra/compra.component';
import { RoutingModule } from '../routing/routing.module';



@NgModule({
  declarations: [
    CompraComponent
  ],
  imports: [
    CommonModule,
    RoutingModule
  ]
})
export class CompraModule { }
