import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Observable, catchError, throwError } from 'rxjs';

const AUTHORIZATION = 'Authorization';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(
    private tokenService: TokenService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(!this.tokenService.isLogged()){
      return next.handle(req);
    }

    let intReq = req;
    const token = this.tokenService.getToken();

    intReq = this.addToken(req, token);

    return next.handle(intReq).pipe(catchError((err: HttpErrorResponse) => {
      if(err.status === 403) {
        this.tokenService.logOut();
        return throwError(() => new Error(err.message));
      } else {
        return throwError(() => new Error(err.message));
      }
    }))
  }

  private addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({headers: req.headers.set('Authorization', 'Bearer ' + token)});
  }
}
