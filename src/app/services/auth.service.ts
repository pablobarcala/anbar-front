import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUsuario } from '../interfaces/LoginUsuario';
import { JwtDto } from '../interfaces/JwtDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiurl: string = 'https://vps-3631176-x.dattaweb.com:8443/auth'

  constructor(
    private http: HttpClient
  ) { }

  public iniciarSesion(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.http.post<JwtDto>(this.apiurl + '/login', loginUsuario)
  }
}
