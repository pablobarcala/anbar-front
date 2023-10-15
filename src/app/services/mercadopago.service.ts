import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/Producto';

@Injectable({
  providedIn: 'root'
})
export class MercadopagoService {
  apiurl: string = 'http://localhost:8080/mp'

  constructor(private http: HttpClient) { }

  createPreference(productos: Producto[]){
    return this.http.post(this.apiurl + "/createAndRedirect", productos)
  }
}
