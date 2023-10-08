import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InicioModule } from './modules/inicio/inicio.module';
import { RoutingModule } from './modules/routing/routing.module';
import { ProductosModule } from './modules/productos/productos.module';
import { AdminModule } from './modules/admin/admin.module';
import { AcercaDeModule } from './modules/acerca-de/acerca-de.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    InicioModule,
    ProductosModule,
    AdminModule,
    AcercaDeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
