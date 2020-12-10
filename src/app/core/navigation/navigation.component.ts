import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from 'src/app/auth.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  balance: Number;
  currentUser;
  panelOpenState = false;

  constructor(private breakpointObserver: BreakpointObserver, private auth: AuthService, private router: Router,activatedRouteSnapshot: ActivatedRoute) {}
  
  get isLogged(): boolean {
    return !!this.auth.currentUser;
  }
  getCurrentUser() {
    this.currentUser = this.auth.currentUser;
  }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  
  
  ngOnInit(){
    this.currentUser = this.auth.currentUser;
  }
  logout() {
    console.log('LOGOUTTTTTT');
    this.auth.logout().subscribe(() => this.router.navigate(['login']));
  }

}
