import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VentasFormComponent } from './components/ventas-form/ventas-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [VentasFormComponent],
  exports: [VentasFormComponent],
  imports: [CommonModule, SharedModule],
})
export class VentasModule {}
