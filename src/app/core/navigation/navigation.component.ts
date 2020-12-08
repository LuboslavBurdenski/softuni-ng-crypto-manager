import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  balance: Number;
  get isLogged(): boolean {
    return !!this.auth.currentUser;
  }
  get currentUser() {
    return this.auth.currentUser;
  }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(private breakpointObserver: BreakpointObserver, private auth: AuthService, private router: Router) {
   
  }
  logout() {
    console.log('LOGOUTTTTTT');
    this.auth.logout().subscribe(() => this.router.navigate(['login']));
  }

}
