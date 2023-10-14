import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompraComponent } from './components/compra/compra.component';
import { RoutingModule } from '../routing/routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CompraComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    ReactiveFormsModule
  ]
})
export class CompraModule { }
