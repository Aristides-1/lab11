import { Component } from '@angular/core';
import { AuthService } from '../services/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  username = ''; [cite: 251]
  password = ''; [cite: 252]

  constructor(private auth: AuthService, private router: Router) {} [cite: 253]

  login() { [cite: 254]
    const data = { [cite: 255]
      username: this.username, [cite: 258]
      password: this.password [cite: 259]
    }; [cite: 256]

    this.auth.login(data).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.access); [cite: 261]
        console.log('Login correcto'); [cite: 262]
        this.router.navigate(['/productos']); // Redirige tras iniciar sesión correctamente
      },
      error: (err) => {
        console.error('Error en el login:', err);
        alert('Credenciales inválidas o error de conexión.');
      }
    }); [cite: 260]
  }
}