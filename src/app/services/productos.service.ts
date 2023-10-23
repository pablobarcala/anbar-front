import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/Producto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  apiurl: string = environment.apiUrl + '/productos'
  imageUrl: string = ''

  constructor(
    private http: HttpClient
  ) { }

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
