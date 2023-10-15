import { AfterViewInit, Component } from '@angular/core';
import { Producto } from 'src/app/interfaces/Producto';
import { CompraService } from 'src/app/services/compra.service';

@Component({
  selector: 'app-finalizacion',
  templateUrl: './finalizacion.component.html',
  styleUrls: ['./finalizacion.component.css']
})
export class FinalizacionComponent implements AfterViewInit {
  opcion: string = ''
  productosLocal = localStorage.getItem('productos')
  productos: Producto[] = []
  precioLocal = localStorage.getItem('precio')
  precio: number = 0

  constructor(
    private compraService: CompraService
  ){
    if(this.productosLocal != null){
      this.productos = JSON.parse(this.productosLocal)
    }
    if(this.precioLocal != null){
      this.precio = JSON.parse(this.precioLocal)
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
