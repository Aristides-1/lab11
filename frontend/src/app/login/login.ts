import { Component } from '@angular/core';
import { AuthService } from '../services/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styles: [`
    .login-container {
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
      width: 100vw !important;
      height: 100vh !important;
      background-color: #f4f6f9 !important;
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
    }
    .login-card {
      background: white !important;
      padding: 30px !important;
      border-radius: 8px !important;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15) !important;
      width: 320px !important;
      box-sizing: border-box !important;
    }
    .login-card h2 {
      margin-top: 0 !important;
      margin-bottom: 20px !important;
      text-align: center !important;
      color: #333 !important;
    }
    .form-group {
      margin-bottom: 15px !important;
    }
    .form-group label {
      display: block !important;
      margin-bottom: 5px !important;
      font-weight: bold !important;
      color: #555 !important;
    }
    .form-group input {
      display: block !important;
      width: 100% !important;
      padding: 10px !important;
      border: 1px solid #ccc !important;
      border-radius: 4px !important;
      box-sizing: border-box !important;
    }
    button {
      display: block !important;
      width: 100% !important;
      padding: 12px !important;
      background-color: #007bff !important;
      color: white !important;
      border: none !important;
      border-radius: 4px !important;
      font-weight: bold !important;
      cursor: pointer !important;
      margin-top: 15px !important;
    }
    button:hover {
      background-color: #0056b3 !important;
    }
  `]
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    const data = {
      username: this.username,
      password: this.password
    };

    this.auth.login(data).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.access);
        console.log('Login correcto');
        this.router.navigate(['/productos']);
      },
      error: (err) => {
        console.error('Error en el login:', err);
        alert('Credenciales inválidas o error de conexión.');
      }
    });
  }
}