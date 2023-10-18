import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Nosotros } from '../interfaces/Nosotros';

@Injectable({
  providedIn: 'root'
})
export class NosotrosService {
  apiurl: string = 'https://vps-3631176-x.dattaweb.com:8443/nosotros'

  constructor(private http: HttpClient) {}

  getNosotros() {
    return this.http.get(this.apiurl + "/traer")
  }

  editarNosotros(id: number, nosotros: Nosotros){
    return this.http.put(this.apiurl + `/editar/${id}`, nosotros)
  }
}
