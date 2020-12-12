import { Injectable, Provider } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { tap } from 'rxjs/operators';
import { NotificationsComponent } from '../../shared/notifications/notifications.component';
import { NotificationsService } from 'src/app/shared/notifications.service';
@Injectable()
export class AppInterceptor implements HttpInterceptor {
  baseURL = environment.baseURL;

  constructor(private notifService: NotificationsService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.includes('http')) {
      req = req.clone({ url: `${this.baseURL}${req.url}`, withCredentials: true })
    }
    return next.handle(req).pipe(
      tap(e => {
        if (e instanceof HttpResponse && (e.url.includes('create') || e.url.includes('edit') ||
          e.url.includes('close') || e.url.includes('login') || e.url.includes('register'))) {
          if (e.status === 200) {
            console.log(e.body);
            this.notifService.showSuccess(e.body || null);
          }
        }


      }),
    )
  }
}
export const appInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AppInterceptor,
  multi: true
}
