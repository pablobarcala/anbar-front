import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
}
