import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Producto } from 'src/app/interfaces/Producto';
import { CarritoService } from 'src/app/services/carrito.service';
import { MercadopagoService } from 'src/app/services/mercadopago.service';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

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
    const doc = new jsPDF()
    const img = new Image()
    img.src = "assets/iconos/almohadones.png"

    doc.setFontSize(14)
    doc.setFont("Helvetica", 'bold')
    doc.addImage(img, 'png', 10, 20, 30, 30)
    doc.text("ANBAR - Orden de compra", 50, 30)
    doc.text("Enviar este PDF al WhatsApp +543815465017", 50, 40)

    autoTable(doc, {
      html: '#pdfTable',
      startY: 60    
    })
    doc.save("ordenCompra.pdf")

    if(this.compraForm.get('opcion')?.value == 'pagina'){
      this.mercadopagoService.createPreference().subscribe((resp: any) => {
        window.location.href = resp.mensaje
      })
    }
  }
}
