import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserService } from 'src/app/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let stream$: Observable<any | null>;
    if (this.userService.currentUser === undefined) {
     
      stream$ = this.userService.getUserProfile();
     
    } else {
      stream$ = of(this.userService.currentUser);
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
