import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InicioModule } from './modules/inicio/inicio.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SubrayadoComponent } from './components/subrayado/subrayado.component';
import { RoutingModule } from './modules/routing/routing.module';
import { ProductosModule } from './modules/productos/productos.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    InicioModule,
    ProductosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
