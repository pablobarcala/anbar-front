import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pregunta } from '../interfaces/Pregunta';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {
  apiurl: string = 'https://vps-3631176-x.dattaweb.com:8443/preguntas'

  constructor(private http: HttpClient) {}

  getPreguntas(){
    return this.http.get(this.apiurl + "/traer")
  }

  addPregunta(pregunta: Pregunta){
    return this.http.post(this.apiurl + "/crear", pregunta)
  }

  editPregunta(id: number, pregunta: Pregunta){
    return this.http.put(this.apiurl + `/editar/${id}`, pregunta)
  }

  deletePregunta(id: number){
    return this.http.delete(this.apiurl + `/eliminar/${id}`)
  }
}
