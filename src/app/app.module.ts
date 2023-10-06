import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { DestacadosComponent } from './components/destacados/destacados.component';
import { DestacadoItemComponent } from './components/destacado-item/destacado-item.component';
import { SubrayadoComponent } from './components/subrayado/subrayado.component';
import { BeneficiosComponent } from './components/beneficios/beneficios.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DestacadosComponent,
    DestacadoItemComponent,
    SubrayadoComponent,
    BeneficiosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
