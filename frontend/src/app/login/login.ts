import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  username = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  login() {

    const data = {
      username: this.username,
      password: this.password
    };

    this.auth.login(data).subscribe((res: any) => {

      localStorage.setItem('token', res.access);

      console.log('Login correcto');

      console.log(res);

      this.router.navigate(['/productos']);

    });

  }

}