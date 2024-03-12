import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  titleUrl = '';
  constructor(private router: Router) {}

  ngOnInit() {
    const ruta = this.router.url.split('/')[1];

    // Asignar un título basado en la ruta activa
    switch (ruta) {
      case 'catalogo':
        this.titleUrl = 'Catálogo / Junta Homocinética';
        break;
      case 'gestion':
        this.titleUrl = 'Gestión / Junta Homocinética';
        break;
    }
  }
}
