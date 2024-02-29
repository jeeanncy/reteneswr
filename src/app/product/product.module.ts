import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductCatalogoComponent } from './components/product-catalogo/product-catalogo.component';
import { ProductGestionComponent } from './components/product-gestion/product-gestion.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductCatalogoComponent,
    ProductGestionComponent,
  ],
  exports: [ProductCatalogoComponent, ProductGestionComponent],
  imports: [CommonModule, SharedModule],
})
export class ProductModule {}
