import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private tokenService: TokenService
  ){
    this.form = formBuilder.group({
      nombreUsuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login(event: Event){
    event.preventDefault()

    if(this.form.valid){
      this.authService.iniciarSesion(this.form.value).subscribe((data: any) => {
        this.tokenService.setToken(data.token)
        this.router.navigate(['/admin/dashboard'])
        .then(() => window.location.reload())
      }, err => {
        alert("Usuario o contraseña incorrectos")
      })
    } else {
      this.form.markAllAsTouched()
    }
  }
}
