import { Injectable, Provider } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../loader/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();
    
    return next.handle(req)
      .pipe(
        finalize(() => this.loaderService.hide())
      );
  }
}

export const loaderInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: LoaderInterceptor,
  multi: true
}