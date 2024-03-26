import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductCatalogoComponent } from './components/product-catalogo/product-catalogo.component';
import { ProductGestionComponent } from './components/product-gestion/product-gestion.component';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductCatalogoComponent,
    ProductGestionComponent,
    ProductDetailComponent,
    ProductFormComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [],
})
export class ProductModule {}
