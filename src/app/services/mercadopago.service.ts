import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MercadopagoService {
  apiurl: string = 'http://localhost:8080/mp'

  constructor(private http: HttpClient) { }

  createPreference(){
    return this.http.get(this.apiurl + "/createAndRedirect")
  }
}
