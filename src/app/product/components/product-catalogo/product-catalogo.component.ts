import { Component } from '@angular/core';

@Component({
  selector: 'product-catalogo',
  templateUrl: './product-catalogo.component.html',
  styleUrl: './product-catalogo.component.css',
})
export class ProductCatalogoComponent {
  public dumparray: any[] = Array.from({ length: 29 });
}
