import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  opcionCompra: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  cambiarOpcion(opcion: string){
    this.opcionCompra.next(opcion);
  }

  getOpcion(){
    return this.opcionCompra.asObservable()
  }

  comprarEnPagina(){
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
  }

  comprarEnVendedor(){

  }
}
