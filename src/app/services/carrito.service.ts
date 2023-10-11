import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../interfaces/Producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  precio : BehaviorSubject<number> = new BehaviorSubject<number>(0.00)
  cantidad: BehaviorSubject<number> = new BehaviorSubject<number>(0)
  productos: BehaviorSubject<Producto[]> = new BehaviorSubject<Producto[]>([])

  constructor() { }

  getPrecio() {
    return this.precio.asObservable()
  }

  getCantidad() {
    return this.cantidad.asObservable()
  }

  agregarCarrito(cantidad: number, producto: Producto){
    const productos = this.productos.value
    let nuevoPrecio = this.precio.value + (producto.precio * cantidad)
    let nuevaCantidad = this.cantidad.value + cantidad

    for(let i = 1; i <= cantidad; i++){
      productos.push(producto)
    }
    this.productos.next(productos)
    this.precio.next(nuevoPrecio)
    this.cantidad.next(nuevaCantidad)
  }

  addProducto(producto: Producto){

  }

  getProductos(){
    return this.productos.asObservable()
  }
}
