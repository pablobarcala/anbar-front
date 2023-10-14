import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Producto } from 'src/app/interfaces/Producto';
import { CarritoService } from 'src/app/services/carrito.service';
import { MercadopagoService } from 'src/app/services/mercadopago.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent {
  productos: Producto[] | undefined = undefined;
  precio: number = 0;
  compraForm: FormGroup

  constructor(
    private carritoService: CarritoService,
    private mercadopagoService: MercadopagoService,
    private formBuilder: FormBuilder
  ){
    carritoService.getProductos().subscribe((productos: any) => this.productos = productos)
    carritoService.getPrecio().subscribe((precio: number) => this.precio = precio)
    this.compraForm = formBuilder.group({
      opcion: new FormControl('pagina')
    })
  }

  comprar(){
    if(this.compraForm.get('opcion')?.value == 'pagina'){
      this.mercadopagoService.createPreference().subscribe((resp: any) => {
        window.location.href = resp.mensaje
      })
    }
  }
}
