import { Component, Input } from '@angular/core';

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
  @Input() isEditable?: boolean = false;
}
