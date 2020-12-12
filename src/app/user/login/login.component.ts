import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent {
  isLoading: boolean = false;
  error: Error = null;

  constructor(private auth: AuthService, private router: Router) { }

  onSubmit(f: NgForm) {
    let form = f.value;
    this.auth.loginUserService(form).subscribe({
      next: (resp) => {
        this.auth.currentUser = resp.user;
        this.isLoading = false;
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.isLoading = false;
        this.error = err.error.message;
        console.error(err);
      }
    });
  }
}



