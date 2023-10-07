import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DestacadosComponent } from './components/destacados/destacados.component';
import { DestacadoItemComponent } from './components/destacado-item/destacado-item.component';
import { BeneficiosComponent } from './components/beneficios/beneficios.component';
import { SubrayadoComponent } from 'src/app/components/subrayado/subrayado.component';
import { UltimosComponent } from './components/ultimos/ultimos.component';



@NgModule({
  declarations: [
    InicioComponent,
    CarouselComponent,
    DestacadosComponent,
    DestacadoItemComponent,
    BeneficiosComponent,
    SubrayadoComponent,
    UltimosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InicioModule { }
