import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrl: './empleado-hijo.component.css'
})
export class EmpleadoHijoComponent {

  @Input() empleadoDeLista:Empleado;

  @Input() indice:number;

  arrayCaracteristica:string[]=[];

  agregarCaracteristica(newC:string){
    this.arrayCaracteristica.push(newC);
  }

}
