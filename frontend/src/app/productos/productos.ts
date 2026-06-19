import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoService } from '../services/producto';

@Component({
  selector: 'app-productos',
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos implements OnInit {

  productos: any[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {

    this.productoService.obtenerProductos().subscribe(
      (data: any) => {

        this.productos = data;

        console.log(data);

      }
    );

  }

}