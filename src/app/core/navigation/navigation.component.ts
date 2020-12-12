import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from 'src/app/auth.service';
import { ActivationStart, Router } from '@angular/router';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  balance: Number;
  currentUser;
  panelOpenState = false;
  ifBalance: boolean = true;

  constructor(private breakpointObserver: BreakpointObserver, private auth: AuthService,
    private router: Router) { }

  getCurrentUser() {
    this.currentUser = this.auth.currentUser;
  }
  get isLogged(): boolean {
    return !!this.auth.currentUser;
  }
  get currentBalance() {
    return this.auth.currentBalance;
  }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof ActivationStart) {
        let data = event.snapshot.data;
        if (data.hasOwnProperty('showBalance')) {
          this.ifBalance = false;
          this.panelOpenState = false;
        } else {
          this.ifBalance = true;
        }
      }
    })


  }
  logout() {
    this.auth.logout().subscribe(() => this.router.navigate(['user', 'login']));
  }

}
