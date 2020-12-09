import { Injectable, Provider } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';

import {environment} from '../../../environments/environment';
@Injectable()
export class AppInterceptor implements HttpInterceptor {
    baseURL = environment.baseURL;

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(!req.url.includes('http')){
      req = req.clone({url: `${this.baseURL}${req.url}`, withCredentials: true})
    }
    return next.handle(req);
  }
}
export const appInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AppInterceptor,
  multi: true
}
