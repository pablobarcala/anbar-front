import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/Producto';

@Injectable({
  providedIn: 'root'
})
export class MercadopagoService {
  apiurl: string = 'https://vps-3631176-x.dattaweb.com:8443/mp'

  constructor(private http: HttpClient) { }

  createPreference(productos: Producto[]){
    return this.http.post(this.apiurl + "/createAndRedirect", productos)
  }
}
