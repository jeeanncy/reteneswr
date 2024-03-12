import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCatalogoComponent } from './product/components/product-catalogo/product-catalogo.component';
import { ProductGestionComponent } from './product/components/product-gestion/product-gestion.component';
import { VentasFormComponent } from './ventas/components/ventas-form/ventas-form.component';
import { FacturasFormComponent } from './facturas/components/facturas-form/facturas-form.component';
import { ProductDetailComponent } from './product/components/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: 'catalogo',
    title: 'Retenes WR - Catálogo',
    component: ProductCatalogoComponent,
  },
  {
    path: 'catalogo/detalle/:id',
    title: 'Retenes WR - Catálogo',
    component: ProductDetailComponent,
  },
  {
    path: 'gestion',
    title: 'Retenes WR - Gestión de Productos',
    component: ProductGestionComponent,
  },
  {
    path: 'gestion/detalle/:id',
    title: 'Retenes WR - Gestión de Productos',
    component: ProductDetailComponent,
  },
  {
    path: 'ventas',
    title: 'Retenes WR - Ventas',
    component: VentasFormComponent,
  },
  {
    path: 'facturas',
    title: 'Retenes WR - Facturas',
    component: FacturasFormComponent,
  },
  {
    path: '**',
    redirectTo: 'catalogo',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
