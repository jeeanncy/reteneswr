import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent {
  private router: Router = new Router();
  public titleUrl = '';
  public isEditable = false;

  ngOnInit() {
    const ruta = this.router.url.split('/')[2];

    // Asignar un título basado en la ruta activa
    switch (ruta) {
      case 'agregar':
        this.titleUrl = 'Agregar Producto';
        break;
      case 'editar':
        this.titleUrl = 'Editar Producto';
        this.isEditable = true;
        break;
    }
  }
}
