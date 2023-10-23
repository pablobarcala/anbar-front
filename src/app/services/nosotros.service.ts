import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Nosotros } from '../interfaces/Nosotros';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NosotrosService {
  apiurl: string =  environment.apiUrl + '/nosotros'

  constructor(private http: HttpClient) {}

  getNosotros() {
    return this.http.get(this.apiurl + "/traer")
  }

  editarNosotros(id: number, nosotros: Nosotros){
    return this.http.put(this.apiurl + `/editar/${id}`, nosotros)
  }
}
