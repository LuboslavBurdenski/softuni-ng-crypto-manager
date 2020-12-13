import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {  tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth.service';

@Injectable()
export class BalanceInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) { }
  intercept(request: HttpRequest<unknown>, next: HttpHandler,): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap(evt => {
        if (evt instanceof HttpResponse) {
          if (evt.headers.get('User-Balance')) {
            this.auth.currentBalance = evt.headers.get('User-Balance');
          }
        }
      }),
    );
  }
}

export const balanceInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: BalanceInterceptor,
  multi: true
}