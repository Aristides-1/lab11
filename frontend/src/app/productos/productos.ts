import { Component, OnInit, signal } from '@angular/core'; // <-- Importa signal
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
  // Convertimos la variable en una Signal
  productos = signal<any[]>([]); 

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productoService.obtenerProductos().subscribe({
      next: (res: any) => {
        this.productos.set(res); // <--- Así se actualiza una signal en Zoneless
      },
      error: (err) => {
        console.error('Error al cargar productos:', err);
      }
    });
  }
}