import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  navOpcion: BehaviorSubject<string> = new BehaviorSubject<string>("Almohadones")

  constructor() { }

  cambiarOpcion(opcion: string) {
    this.navOpcion.next(opcion)
  }

  getOpcion() {
    return this.navOpcion.asObservable()
  }
}
