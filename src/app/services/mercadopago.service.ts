import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/Producto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MercadopagoService {
  apiurl: string = environment.apiUrl + '/mp'

  constructor(private http: HttpClient) { }

  createPreference(productos: Producto[]){
    return this.http.post(this.apiurl + "/createAndRedirect", productos)
  }
}
