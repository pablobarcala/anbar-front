import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NosotrosService {
  apiurl: string = 'http://localhost:8080/nosotros'

  constructor(private http: HttpClient) {}

  getNosotros() {
    return this.http.get(this.apiurl + "/traer")
  }
}
