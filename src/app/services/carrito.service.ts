import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../interfaces/Producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  precio : BehaviorSubject<number> = new BehaviorSubject<number>(0.00)
  cantidad: BehaviorSubject<number> = new BehaviorSubject<number>(0)

  constructor() { }

  getPrecio() {
    return this.precio.asObservable()
  }

  getCantidad() {
    return this.cantidad.asObservable()
  }

  agregarCarrito(cantidad: number, producto: Producto){
    let nuevoPrecio = this.precio.value + (producto.precio * cantidad)
    let nuevaCantidad = this.cantidad.value + cantidad

    this.precio.next(nuevoPrecio)
    this.cantidad.next(nuevaCantidad)
  }
}
