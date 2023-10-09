import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  apiurl: string = 'http://localhost:8080/productos'

  constructor(private http: HttpClient) { }

  getProductos() {
    return this.http.get(this.apiurl + "/traer")
  }

  addProducto(producto: Producto) {
    return this.http.post(this.apiurl + "/crear", producto)
  }

  editarProducto(id: number, producto: Producto) {
    return this.http.put(this.apiurl + `/editar/${id}`, producto)
  }

  deleteProducto(id: number){
    return this.http.delete(this.apiurl + `/eliminar/${id}`)
  }
}
