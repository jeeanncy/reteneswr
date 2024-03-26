import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './components/tooltip/tooltip.component';

@NgModule({
  declarations: [HeaderComponent, TooltipComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, TooltipComponent],
})
export class SharedModule {}
