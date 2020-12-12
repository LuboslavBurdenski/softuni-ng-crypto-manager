import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { rePasswordValidatorFactory } from '../../shared/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: FormGroup;
  currencies: string[] = ['eur', 'usd'];
 
  error: Error;
  usernamePattern = "[a-zA-Z0-9._]+";
  emailPattern = "[A-Za-z0-9._]+@[a-z0-9]+\.[a-z]{2,4}";

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    const passwordControl = this.fb.control('', [Validators.required, Validators.minLength(5)]);
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5), Validators.pattern(this.usernamePattern)]],
      email: ['', [Validators.required]],
      balance: ['', Validators.required],
      password: passwordControl,
      rePassword: ['', [Validators.required, Validators.minLength(5), rePasswordValidatorFactory(passwordControl)]]
    });
  }
  onSubmit(): void {
    const data = this.form.value;
  
    console.log(data);
    this.auth.registerService(data).subscribe({
      next: (resp) => {
        this.auth.currentUser = resp.user;
        this.router.navigate(['/']);
      },
      error: (err) => {
      
        this.error = err.error.message;
        console.error(err);
      }
    });
  }
}
