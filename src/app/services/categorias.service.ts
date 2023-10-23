import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/Categoria';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  apiurl: string = environment.apiUrl + '/categorias'

  constructor(private http: HttpClient) {}

  getCategorias() {
    return this.http.get(this.apiurl + "/traer")
  }

  addCategoria(categoria: Categoria){
    return this.http.post(this.apiurl + "/crear", categoria)
  }

  editCategoria(id: number, categoria: Categoria){
    return this.http.put(this.apiurl + `/editar/${id}`, categoria)
  }

  deleteCategoria(id: number){
    return this.http.delete(this.apiurl + `/eliminar/${id}`)
  }
}
