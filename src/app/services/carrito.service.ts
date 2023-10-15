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
  carritoOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  productosLocal: Producto[] = []
  precioLocal: number = 0

  constructor() {}

  getPrecio() {
    return this.precio.asObservable()
  }

  getCantidad() {
    return this.cantidad.asObservable()
  }

  actualizarPrecioCantidad(cantidad: number, producto: Producto) {
    let nuevoPrecio = this.precio.value
    let nuevaCantidad = this.cantidad.value

    if(producto.oferta > 0){
      nuevoPrecio += (producto.precio * (1 - producto.oferta / 100)) * cantidad
      this.precioLocal += (producto.precio * (1 - producto.oferta / 100)) * cantidad
    } else {
      nuevoPrecio += producto.precio * cantidad
      this.precioLocal += producto.precio * cantidad
    }
    nuevaCantidad += cantidad

    this.precio.next(nuevoPrecio)
    this.cantidad.next(nuevaCantidad)
  }

  // Funcion para agregar productos al carrito
  agregarCarrito(cantidad: number, producto: Producto){
    const productos = this.productos.value
    const stock = producto.cantidad

    let productoExistente = productos.find(p => p.idproductos === producto.idproductos);

    if(productoExistente){
      if(productoExistente.cantidad < stock){
        productoExistente.cantidad += cantidad;
        this.actualizarPrecioCantidad(cantidad, producto)
      } else {
        alert("No se puede agregar más cantidad de este producto")
      }
    } else {
      productoExistente = {...producto, cantidad: cantidad}
      this.actualizarPrecioCantidad(cantidad, producto)
      productos.push(productoExistente)
      this.productosLocal.push(productoExistente)
    }

    this.productos.next(productos)
    
    localStorage.setItem('productos', JSON.stringify(this.productosLocal))
    localStorage.setItem('precio', JSON.stringify(this.precioLocal))
  }

  eliminarDeCarrito(i:number, cantidad: number, producto: Producto){
    const productos = this.productos.value
    let nuevoPrecio = this.precio.value
    let nuevaCantidad = this.cantidad.value

    let productoExistente = productos.find(p => p.idproductos === producto.idproductos)

    if(productoExistente){
      productoExistente.cantidad -= cantidad
      if(productoExistente.cantidad == 0){
        productos.splice(i, 1)
      }
      
      this.productosLocal.splice(i, 1)
      this.productosLocal.push(productoExistente)
      localStorage.setItem('productos', JSON.stringify(this.productosLocal))
    }

    if(producto.oferta > 0){
      nuevoPrecio -= (producto.precio * (1 - producto.oferta / 100)) * cantidad
      this.precioLocal -= (producto.precio * (1 - producto.oferta / 100)) * cantidad
    } else {
      nuevoPrecio -= producto.precio * cantidad
      this.precioLocal -= producto.precio * cantidad
    }
    nuevaCantidad -= cantidad

    this.productos.next(productos)
    this.precio.next(nuevoPrecio)
    this.cantidad.next(nuevaCantidad)
    localStorage.setItem('precio', JSON.stringify(this.precioLocal))
  }

  getProductos(){
    return this.productos.asObservable()
  }

  toggleCarrito(){
    this.carritoOpen.next(!this.carritoOpen.value)
  }

  isCarritoOpen() {
    return this.carritoOpen.asObservable()
  }
}
