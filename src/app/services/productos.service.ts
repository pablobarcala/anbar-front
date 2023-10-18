import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  apiurl: string = 'https://vps-3631176-x.dattaweb.com:8443/productos'

  constructor(private http: HttpClient) { }

  getProductos() {
    return this.http.get(this.apiurl + "/traer")
  }

  getProductosPorNombre(nombre: string){
    return this.http.get(this.apiurl + `/traer/${nombre}`)
  }

  addProducto(producto: Producto, id: number) {
    return this.http.post(this.apiurl + `/crear/${id}`, producto)
  }

  editarProducto(id: number, idcategorias: number, producto: Producto) {
    return this.http.put(this.apiurl + `/editar/${id}/${idcategorias}`, producto)
  }

  bajarStock(id: number, producto: Producto) {
    return this.http.put(this.apiurl + `/bajarStock/${id}`, producto)
  }

  deleteProducto(id: number){
    return this.http.delete(this.apiurl + `/eliminar/${id}`)
  }
}
