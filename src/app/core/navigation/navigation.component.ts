import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  balance: Number;
  get isLogged(): boolean {
    return !!this.userService.currentUser;
  }
  get currentUser() {
    return this.userService.currentUser;
  }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(private breakpointObserver: BreakpointObserver, private userService: UserService, private router: Router) {
   
  }
  logout() {
    console.log('LOGOUTTTTTT');
    this.userService.logout().subscribe(() => this.router.navigate(['login']));
  }

}
