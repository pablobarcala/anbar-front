import { AfterViewInit, Component } from '@angular/core';
import { Nosotros } from 'src/app/interfaces/Nosotros';
import { Producto } from 'src/app/interfaces/Producto';
import { CompraService } from 'src/app/services/compra.service';
import { NosotrosService } from 'src/app/services/nosotros.service';
import { ProductosService } from 'src/app/services/productos.service';

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
  nosotros: Nosotros | undefined = undefined

  constructor(
    private compraService: CompraService,
    private nosotrosService: NosotrosService,
    private productoService: ProductosService
  ){
    if(this.productosLocal != null){
      this.productos = JSON.parse(this.productosLocal)
    }
    if(this.precioLocal != null){
      this.precio = JSON.parse(this.precioLocal)
    }
    nosotrosService.getNosotros().subscribe((resp: any) => {
      let nosotros: Nosotros[] = resp

      nosotros.find(n => {
        if(n.idnosotros == 1){
          this.nosotros = n
        }
      })
    })
  }
  
  ngAfterViewInit(): void {
    this.descargar()
    this.productos.forEach((producto: any) => {
      this.productoService.bajarStock(producto.idproductos, producto).subscribe()
    })
  }

  descargar(){
    this.compraService.getOpcion().subscribe((resp: any) => this.opcion = resp)
    if(this.opcion == 'pagina'){
      this.compraService.comprarEnPagina()
    } else {
      this.compraService.comprarEnVendedor()
    }
  }
}
