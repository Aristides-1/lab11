import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = 'http://127.0.0.1:8000/api/productos/'; 

  constructor(private http: HttpClient) { }

  obtenerProductos() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` 
    });

    // Pasamos el objeto de configuración correctamente con la variable corregida
    return this.http.get(this.apiUrl, { headers: headers }); 
  }
}