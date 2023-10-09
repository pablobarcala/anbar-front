import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  apiurl: string = 'http://localhost:8080/productos'

  constructor(private http: HttpClient) { }

  getProductos() {
    return this.http.get(this.apiurl + "/traer")
  }

  deleteProducto(id: number){
    return this.http.delete(this.apiurl + `/eliminar/${id}`)
  }
}
