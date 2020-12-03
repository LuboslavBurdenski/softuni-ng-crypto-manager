import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserService } from 'src/app/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService,
    private router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let stream$: Observable<any | null>;
    
    if (this.userService.currentUser === undefined) {
      stream$ = this.userService.getUserProfile();
      
    } else {
      stream$ = of(this.userService.currentUser);
    }
    return stream$.pipe(
      map((user) => {
        const isLoggedFromData = route.data.isLogged;
        return  isLoggedFromData === !!user;
      }),
      tap((canContinue) => {
        if (canContinue) { return true; }
        const url = this.router.url;
        this.router.navigateByUrl(url);
      }),
    );
  }
}
