import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(
    private tokenService: TokenService, 
    private router: Router
  ) {}

  canActivate(): boolean {
    if(this.tokenService.isAdmin()){
      return true;
    } else {
      this.router.navigate(['/main/Inicio']);
      return false;
    }
  }
}
