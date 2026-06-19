import { Routes } from '@angular/router';

import { Login } from './login/login';
import { Productos } from './productos/productos';

export const routes: Routes = [

  {
    path: '',
    component: Login
  },

  {
    path: 'productos',
    component: Productos
  }

];