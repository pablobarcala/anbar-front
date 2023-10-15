import { AfterViewInit, Component } from '@angular/core';
import { Producto } from 'src/app/interfaces/Producto';
import { CarritoService } from 'src/app/services/carrito.service';
import { CompraService } from 'src/app/services/compra.service';

@Component({
  selector: 'app-finalizacion',
  templateUrl: './finalizacion.component.html',
  styleUrls: ['./finalizacion.component.css']
})
export class FinalizacionComponent implements AfterViewInit {
  opcion: string = ''
  localstorage = localStorage.getItem('productos')
  productos: Producto[] = []
  precio: number = 0

  constructor(
    private compraService: CompraService,
    private carritoService: CarritoService
  ){
    carritoService.getPrecio().subscribe((precio: number) => this.precio = precio)
    if(this.localstorage != null){
      this.productos = JSON.parse(this.localstorage)
    }
  }
  
  ngAfterViewInit(): void {
    this.compraService.getOpcion().subscribe((resp: any) => this.opcion = resp)
    if(this.opcion == 'pagina'){
      this.compraService.comprarEnPagina()
    } else {
      this.compraService.comprarEnVendedor()
    }
  }
}
