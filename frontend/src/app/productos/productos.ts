import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class ProductosComponent implements OnInit {
  productos: any[] = []; //Inicializar como arreglo vacío para evitar errores de tipo undefined

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productoService.obtenerProductos().subscribe({
      next: (res: any) => {
        this.productos = res; 
      },
      error: (err) => {
        console.error('Error al cargar productos:', err);
      }
    });
  }
}