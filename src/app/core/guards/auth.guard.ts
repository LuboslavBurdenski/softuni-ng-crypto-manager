import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let stream$: Observable<any | null>;
    if (this.auth.currentUser === undefined) {
      stream$ = this.auth.getUserProfile();
    } else {
      stream$ = of(this.auth.currentUser);
    }
    return stream$.pipe(
      map((user) => {
       
        const isLoggedFromData = childRoute.data.isLogged;
        return typeof isLoggedFromData !== 'boolean' || isLoggedFromData === !!user;
      }),
      tap((isAccepted) => {
        if (isAccepted) { return; }
        const url = this.router.url;
        this.router.navigateByUrl(url);
      }),
    );
  }
}
