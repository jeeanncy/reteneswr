import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FacturasFormComponent } from './components/facturas-form/facturas-form.component';

@NgModule({
  declarations: [FacturasFormComponent],
  exports: [FacturasFormComponent],
  imports: [CommonModule, SharedModule],
})
export class FacturasModule {}
