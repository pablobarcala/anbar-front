import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  apiurl: string = 'http://localhost:8080/categorias'

  constructor(private http: HttpClient) {}

  getCategorias() {
    return this.http.get(this.apiurl + "/traer")
  }

  addCategoria(categoria: Categoria){
    return this.http.post(this.apiurl + "/crear", categoria)
  }

  deleteCategoria(id: number){
    return this.http.delete(this.apiurl + `/eliminar/${id}`)
  }
}
