import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  opcionCompra: BehaviorSubject<string> = new BehaviorSubject<string>('pagina');

  constructor() { }

  cambiarOpcion(opcion: string){
    this.opcionCompra.next(opcion);
  }

  getOpcion(){
    return this.opcionCompra.asObservable()
  }

  comprarEnPagina(telefono: string | undefined){
    const doc = new jsPDF()
    const img = new Image()
    img.src = "assets/iconos/logo-aqua-2.png"

    doc.setFontSize(14)
    doc.setFont("Helvetica", 'bold')
    doc.addImage(img, 'png', 10, 20, 30, 30)
    doc.text("ANBAR - Orden de compra", 50, 30)
    doc.text(`Enviar este PDF al WhatsApp +54${telefono}`, 50, 40)
    doc.text("PAGADO", 50, 50)

    autoTable(doc, {
      html: '#pdfTable',
      startY: 60    
    })
    doc.save("ordenCompra.pdf")
  }

  comprarEnVendedor(telefono: string | undefined){
    const doc = new jsPDF()
    const img = new Image()
    img.src = "assets/iconos/logo-aqua-2.png"

    doc.setFontSize(14)
    doc.setFont("Helvetica", 'bold')
    doc.addImage(img, 'png', 10, 20, 30, 30)
    doc.text("ANBAR - Orden de compra", 50, 30)
    doc.text(`Enviar este PDF al WhatsApp +54${telefono}`, 50, 40)
    doc.text("ACORDAR PAGO", 50, 50)

    autoTable(doc, {
      html: '#pdfTable',
      startY: 60    
    })
    doc.save("ordenCompra.pdf")
  }
}
