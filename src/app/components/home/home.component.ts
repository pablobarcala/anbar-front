import { Component } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  carritoOpen: boolean = false;
  
  constructor(private carritoService: CarritoService){
    carritoService.isCarritoOpen().subscribe((resp: any) => this.carritoOpen = resp)
  }
}
