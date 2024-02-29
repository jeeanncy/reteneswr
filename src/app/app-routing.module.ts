import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCatalogoComponent } from './product/components/product-catalogo/product-catalogo.component';
import { ProductGestionComponent } from './product/components/product-gestion/product-gestion.component';
import { VentasFormComponent } from './ventas/components/ventas-form/ventas-form.component';
import { FacturasFormComponent } from './facturas/components/facturas-form/facturas-form.component';

const routes: Routes = [
  {
    path: 'catalogo',
    title: 'Retenes WR - Catálogo',
    component: ProductCatalogoComponent,
  },
  {
    path: 'gestion',
    title: 'Retenes WR - Gestión de Productos',
    component: ProductGestionComponent,
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
