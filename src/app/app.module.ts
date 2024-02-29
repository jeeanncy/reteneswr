import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { VentasModule } from './ventas/ventas.module';
import { FacturasModule } from './facturas/facturas.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    VentasModule,
    FacturasModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
