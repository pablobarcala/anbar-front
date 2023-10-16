import { Component, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/Producto';
import { CarritoService } from 'src/app/services/carrito.service';
import { CompraService } from 'src/app/services/compra.service';
import { MercadopagoService } from 'src/app/services/mercadopago.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent {
  productos: Producto[] = [];
  precio: number = 0;
  compraForm: FormGroup

  constructor(
    private carritoService: CarritoService,
    private mercadopagoService: MercadopagoService,
    private formBuilder: FormBuilder,
    private compraService: CompraService,
    private productoService: ProductosService,
    private router: Router
  ){
    carritoService.getProductos().subscribe((productos: any) => this.productos = productos)
    carritoService.getPrecio().subscribe((precio: number) => this.precio = precio)
    this.compraForm = formBuilder.group({
      opcion: new FormControl('pagina')
    })
    this.compraForm.valueChanges.subscribe((resp: any) => {
      this.compraService.cambiarOpcion(resp.opcion)
    })
  }

  comprar(){
    if(this.compraForm.get('opcion')?.value == 'pagina'){
      this.mercadopagoService.createPreference(this.productos).subscribe((resp: any) => {
        window.open(resp.mensaje, '_blank')
      })
    } else {
      this.router.navigate(['/finalizacion'])
    }
  }
}
