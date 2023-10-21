import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  roles: Array<string> = [];

  constructor() { }

  public setToken(token: string) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY) ?? '';
  } 

  public isLogged(): boolean {
    if(this.getToken() != ''){
      return true;
    }
    return false;
  }

  public getUsername() {
    if(!this.isLogged()){
      return null;
    }

    const token = this.getToken();
    const payload = token.split('.')[1];
    const payloadDecoded = window.atob(payload);
    const values = JSON.parse(payloadDecoded);
    const username = values.sub;
    return username;    
  }

  public isAdmin() {
    if(!this.isLogged()){
      return null;
    }

    const token = this.getToken();
    const payload = token.split('.')[1];
    const payloadDecoded = window.atob(payload);
    const values = JSON.parse(payloadDecoded);
    const roles = values.roles;
    if(roles.indexOf('ROLE_ADMIN') < 0) {
      return false;
    }
    return true;
  }

  public logOut() {
    window.localStorage.clear();
  }
}
