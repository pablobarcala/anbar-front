import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pregunta } from '../interfaces/Pregunta';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {
  apiurl: string = 'http://localhost:8080/preguntas'

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
}
