import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {
  apiurl: string = 'http://localhost:8080/preguntas'

  constructor(private http: HttpClient) {}

  getPreguntas(){
    return this.http.get(this.apiurl + "/traer")
  }
}
