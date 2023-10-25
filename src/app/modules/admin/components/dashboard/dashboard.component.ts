import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(
    private tokenService: TokenService,
    private router: Router
  ){}

  logout(){
    this.tokenService.logOut()
    this.router.navigate(['/main'])
    .then(() => window.location.reload())
  }
}
