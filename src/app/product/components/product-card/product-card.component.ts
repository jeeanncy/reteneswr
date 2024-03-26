import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() imagen?: string;
  @Input() nombre?: string = 'Nombre Producto';
  @Input() stock?: string = 'Sujeto a cambio';
  @Input() dimensiones?: string = 'Dimension del producto';
  @Input() precio?: string;
  @Input() isEditable?: boolean = false;
  @Input() isLinked?: boolean = false;

  private router: Router = new Router();

  opcionesTooltip = [
    { texto: 'Editar', funcion: this.funcion1.bind(this) },
    { texto: 'Eliminar', funcion: this.funcion2.bind(this) },
  ];

  funcion1() {
    this.router.navigate(['/gestion/editar/12345']);
  }

  funcion2() {
    console.log('Función 2 ejecutada');
  }
}
