import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  currencies: string[] = ['eur', 'usd'];
  isLoading: boolean = true;
  error: Error = null;
  constructor(private userService: UserService, private router: Router) { }

  onSubmit(f: NgForm) {
    console.log(f.value);
    this.isLoading = true;
    let form = f.value;
    this.userService.registerService(form).subscribe({
      next: () => {
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
