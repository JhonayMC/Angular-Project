import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrl: './caracteristicas-empleado.component.css'
})
export class CaracteristicasEmpleadoComponent {

  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  agregarCaracteristicas(value:string){
    this.agregarCarac.agregarCaracteristicas(value);
    this.caracteristicasEmpleados.emit(value);
  }

  constructor(private agregarCarac:EmpleadosService){}


}
