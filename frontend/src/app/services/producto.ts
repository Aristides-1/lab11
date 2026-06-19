import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  apiUrl = 'http://127.0.0.1:8000/api/productos/';

  constructor(private http: HttpClient) {}

  obtenerProductos() {

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token')
    });

    return this.http.get(this.apiUrl, { headers });

  }

}