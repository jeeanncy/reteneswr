import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.css',
})
export class TooltipComponent {
  @Input()
  opciones: { texto: string; funcion: Function }[] = [];

  ejecutarFuncion(funcion: Function) {
    if (funcion) {
      funcion();
    }
  }
}
