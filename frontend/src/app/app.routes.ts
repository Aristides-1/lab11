import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { ProductosComponent } from './productos/productos';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }, // <-- Ojo: Debe ser LoginComponent
  { path: 'productos', component: ProductosComponent },
  { path: '**', redirectTo: 'login' }
];