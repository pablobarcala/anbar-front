import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InicioModule } from './modules/inicio/inicio.module';
import { RoutingModule } from './modules/routing/routing.module';
import { ProductosModule } from './modules/productos/productos.module';
import { AdminModule } from './modules/admin/admin.module';
import { AcercaDeModule } from './modules/acerca-de/acerca-de.module';
import { HttpClientModule } from '@angular/common/http';
import { ContactoModule } from './modules/contacto/contacto.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { FaqModule } from './modules/faq/faq.module';
import { ConfirmacionComponent } from './components/confirmacion/confirmacion.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CompraModule } from './modules/compra/compra.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ConfirmacionComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    InicioModule,
    ProductosModule,
    AdminModule,
    AcercaDeModule,
    FaqModule,
    ContactoModule,
    BrowserAnimationsModule,
    MaterialModule,
    CompraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
