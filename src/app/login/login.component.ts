import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})

export class LoginComponent {
  isLoading: boolean = false;
  error: Error = null;

  constructor(private userService: UserService, private router: Router) { }

  onSubmit(f: NgForm) {
    console.log(f.value);
    this.isLoading = true;
    let form = f.value;
    this.userService.loginUserService(form).subscribe({
      next: (resp) => {
        this.userService.currentUser = resp;
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



