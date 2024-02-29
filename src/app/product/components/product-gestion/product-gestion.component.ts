import { Component } from '@angular/core';

@Component({
  selector: 'product-gestion',
  templateUrl: './product-gestion.component.html',
  styleUrl: './product-gestion.component.css',
})
export class ProductGestionComponent {
  public dumparray: any[] = Array.from({ length: 29 });
}
