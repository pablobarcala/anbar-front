import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  apiurl: string = 'http://localhost:8080/categorias'

  constructor(private http: HttpClient) {}

  getCategorias() {
    return this.http.get(this.apiurl + "/traer")
  }
}
