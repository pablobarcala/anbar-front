import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUsuario } from '../interfaces/LoginUsuario';
import { JwtDto } from '../interfaces/JwtDto';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiurl: string = environment.apiUrl + '/auth'

  constructor(
    private http: HttpClient
  ) { }

  public iniciarSesion(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.http.post<JwtDto>(this.apiurl + '/login', loginUsuario)
  }
}
